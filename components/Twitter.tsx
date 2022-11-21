import React from "react";
import TwitterIcon from "./TwitterIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <TwitterIcon className={className} />;

interface Props {
  links: Link[];
}

const Reddit = ({ links }: Props) => {
  return <List links={links} title="Reddit" Icon={Icon} />;
};

export default Reddit;
