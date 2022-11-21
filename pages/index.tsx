import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ThemeChanger from "components/ThemeChanger";

import { Link } from "types/link";
import { parseISO, format } from "date-fns";
import Reddit from "components/Reddit";
import { getRedditHotNews } from "utils/reddit";
import { getTwitterHotNews } from "utils/twitter";
import Twitter from "components/Twitter";
import HackerNews from "components/HackerNews";
import { getHackerNews } from "utils/hacker";
import Divider from "components/Divider";
import Container from "components/Container";

type IBlog = {
  redditLinks: Link[];
  twitterLinks: Link[];
  hackerLinks: Link[];
};

// const sortByDate = (postA: Link, postB: Link) => (parseISO(postA.date) > parseISO(postB.date) ? -1 : 1);
// const formatDate = (date: string) => format(parseISO(date), "LLLL d, yyyy");

const Home = ({ redditLinks, twitterLinks, hackerLinks }: IBlog) => {
  return (
    <div className="font-national_2 min-h-screen  py-2 bg-th-background text-th-primary-dark transition-colors">
      <Head>
        <title>Figmos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
          <div className="w-full mx-auto h-full max-w-lg md:max-w-none">
            <div className="flex items-center justify-between w-full flex-1">
              <h1 className="text-5xl font-bold">Figmos </h1>
              <ThemeChanger />
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <Reddit links={redditLinks} />
          <Twitter links={twitterLinks} />
          <HackerNews links={hackerLinks} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const redditLinks = (await getRedditHotNews()).sort(sortByDate).slice(0, 5) ?? [];
  // const twitterLinks = (await getTwitterHotNews()).sort(sortByDate).slice(0, 5) ?? [];
  // const hackerLinks = (await getHackerNews()).sort(sortByDate).slice(0, 5) ?? [];
  return {
    props: {
      redditLinks,
      twitterLinks,
      hackerLinks,
    },
  };
};

export default Home;
