import type { Link } from "../types/link";
import type { Subreddit } from "../types/reddit";
import axios from "axios";
import { formatISO } from "date-fns";

// convert epoch time to ISO string
const epochToISO = (epoch: number) => formatISO(new Date(epoch * 1000));

//  retrieve Subreddit Hot News from Reddit API
export const getRedditHotNews = async (): Promise<Link[]> => {
	const { data } = await axios.get<Subreddit>(
		"https://www.reddit.com/r/news/hot.json",
	);
	const links: Link[] = data.data.children.map(
		({ data: { id, title, permalink, created_utc, url } }) => {
			return {
				id,
				title,
				link: url,
				permalink: `https://www.reddit.com${permalink}`,
				date: epochToISO(created_utc),
			};
		},
	);

	return links;
};
