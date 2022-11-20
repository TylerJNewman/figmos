import axios from "axios";
import { formatISO } from "date-fns";
import { GETTweetsSearchRecentResponse } from "twitter-types";
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
//  retrieve trending News from Twitter API
export const getTwitterHotNews = async (): Promise<any> => {
  const baseUrl = "https://api.twitter.com/2/tweets/search/recent";
  const query = "from:nytimes";
  const maxResults = 10;
  const tweetFields =
    "author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,source,text,withheld";
  const userFields =
    "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld";
  const expansions = "author_id";
  const url = `${baseUrl}?query=${query}&max_results=${maxResults}&tweet.fields=${tweetFields}&user.fields=${userFields}&expansions=${expansions}`;

  const headers = {
    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
  };

  const { data } = await axios.get<GETTweetsSearchRecentResponse>(url, { headers });
  const getText = (text: string) => twitter.htmlEscape(text);

  const getUrls = (text: string) => twitter.extractUrls(text);
  return data.data.map((tweet) => ({
    id: tweet.id,
    title: textWithoutUrls(tweet.text),
    permalink: `https://twitter.com/${tweet.author_id}/status/${tweet.id}`,
    link: getUrls(tweet.text)?.length ? getUrls(tweet.text)[0] : "",

    // date: epochToISO(tweet.created_at),
    // permanlink: `https://twitter.com/${tweet.author_id}/status/${tweet.id}`,
    // link: `https://twitter.com/${tweet.author_id}/status/${tweet.id}`,
  }));
};
