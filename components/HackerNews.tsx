import React from "react";
import HackerNewsIcon from "./HackerNewsIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <HackerNewsIcon className={className} />;

interface Props {
  links: Link[];
}

const HackerNews = ({ links }: Props) => {
  return <List links={links} title="HackerNews" Icon={Icon} />;
};

export default HackerNews;
