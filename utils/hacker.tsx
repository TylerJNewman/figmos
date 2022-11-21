import axios, { AxiosResponse } from "axios";
import { Stories } from "types/hackernews";
import { Link } from "types/link";

export const getHackerNews = async (): Promise<Link[]> => {
  const { data } = await axios.get<Stories>("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");

  const getHackerNewsItem = async (id: number): Promise<any> => {
    const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return data;
  };

  const hackerNewsItems = await Promise.all(data.slice(0, 10).map((id) => getHackerNewsItem(id)));

  return hackerNewsItems.map((item) => ({
    id: item.id,
    title: item.title,
    link: item.url,
    permalink: `https://news.ycombinator.com/item?id=${item.id}`,
  }));
};
