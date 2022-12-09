import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import localFont from "@next/font/local";
import cn from "classnames";
const myFont = localFont({ src: "./HelveticaNeue.woff" });
const myHeaderFont = localFont({ src: "./OldEnglishDOT.otf" });

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
import getTechmemeRss from "utils/getTechmemeRss";
import getDiggRss from "utils/getDiggRss";
import Digg from "components/Digg";
import Techmeme from "components/Techmeme";
import getNyTimesRss from "utils/getNyTimesRss";
import NyTimes from "components/NyTimes";

type IBlog = {
  redditLinks: Link[];
  twitterLinks: Link[];
  hackerLinks: Link[];
  diggLinks: Link[];
  techmemeLinks: Link[];
  nyTimesLinks: Link[];
};

const sortByDate = (postA: Link, postB: Link) => (parseISO(postA.date!) > parseISO(postB.date!) ? -1 : 1);
// const formatDate = (date: string) => format(parseISO(date), "LLLL d, yyyy");

const Home = ({ redditLinks, twitterLinks, hackerLinks, diggLinks, techmemeLinks, nyTimesLinks }: IBlog) => {
  return (
    <div className="py-2 text-th-primary-dark transition-colors">
      <Head>
        <title>Perival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cn("flex flex-col items-center justify-center flex-1", myFont.className)}>
        {/* <div className="flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto items-center ">
          <div className="w-full mx-auto h-full max-w-lg md:max-w-none">
            <div className="flex items-center justify-between w-full flex-1 my-2">
              <h1 className="text-4xl font-bold">Perival </h1>
              <ThemeChanger />
            </div>
          </div>
        </div> */}
        <header>
          <div className="flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto items-center ">
            <div className="w-full mx-auto h-full max-w-lg md:max-w-none">
              <div className="flex items-center justify-between w-full flex-1 my-2">
                <h1 className={cn("text-4xl font-bold", myHeaderFont.className)}>Perival</h1>
                {/* <ThemeChanger /> */}
              </div>
            </div>
          </div>
        </header>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <Reddit links={redditLinks} />
          <Twitter links={twitterLinks} />
          <HackerNews links={hackerLinks} />
          <Digg links={diggLinks} />
          <Techmeme links={techmemeLinks} />
          <NyTimes links={nyTimesLinks} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const redditLinks = (await getRedditHotNews()).sort(sortByDate).slice(0, 5) ?? [];
  const twitterLinks = (await getTwitterHotNews()).sort(sortByDate).slice(0, 5) ?? [];
  const hackerLinks = (await getHackerNews()).sort(sortByDate).slice(0, 5) ?? [];
  const diggLinks = (await getDiggRss()).sort(sortByDate).slice(0, 5) ?? [];
  const techmemeLinks = (await getTechmemeRss()).sort(sortByDate).slice(0, 5) ?? [];
  const nyTimesLinks = (await getNyTimesRss()).sort(sortByDate).slice(0, 5) ?? [];
  return {
    props: {
      redditLinks,
      twitterLinks,
      hackerLinks,
      diggLinks,
      techmemeLinks,
      nyTimesLinks,
    },
    revalidate: 60,
  };
};

export default Home;
