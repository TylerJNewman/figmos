import React from "react";
import TwitterIcon from "./TwitterIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <TwitterIcon className={className} />;

interface Props {
  links: Link[];
}

const Twitter = ({ links }: Props) => {
  return <List links={links} title="Twitter" Icon={Icon} />;
};

export default Twitter;
