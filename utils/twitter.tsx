import axios from "axios";
import { formatISO } from "date-fns";
import { GETTweetsSearchRecentResponse, GETListsIdtweetsResponse, GETListsIdTweetsRoute } from "twitter-types";
import twitter from "twitter-text";

// convert epoch time to ISO string
const epochToISO = (epoch: number | string) => formatISO(new Date(+epoch * 1000));

const getUrls = (text: string) => {
  const urls = twitter.extractUrlsWithIndices(text, { extractUrlsWithoutProtocol: false });
  return urls.map((url) => ({
    url: url.url,
    indices: url.indices,
  }));
};

const removeEntitiesFromText = (text: string, entities: any[]) => {
  let newText = text;
  entities.forEach((entity) => {
    newText = newText.replace(entity.url, "");
  });
  return newText;
};

const textWithoutUrls = (text: string) => {
  const urls = getUrls(text);
  const textWithoutUrls = removeEntitiesFromText(text, urls);
  return textWithoutUrls;
};
export const getTwitterHotNews = async (): Promise<any> => {
  const baseUrl = "https://api.twitter.com/2";
  const route = GETListsIdTweetsRoute("35744510");
  const url = `${baseUrl}${route}?tweet.fields=created_at,entities,public_metrics,source,text,withheld&expansions=author_id&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`;

  const headers = {
    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
  };
  const { data } = await axios.get<GETListsIdtweetsResponse>(url, { headers });

  debugger;

  const getUrlsWithoutIndices = (text: string) => {
    const urls = twitter.extractUrls(text);
    return urls;
  };

  return data.data.map((tweet) => ({
    id: tweet.id,
    title: textWithoutUrls(tweet.text),
    link: getUrlsWithoutIndices(tweet.text)?.length ? getUrlsWithoutIndices(tweet.text)[0] : "",
    permalink: `https://twitter.com/${tweet.author_id}/status/${tweet.id}`,
  }));
};
