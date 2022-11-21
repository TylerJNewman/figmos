import React from "react";
import AlienIcon from "./AlienIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <AlienIcon className={className} />;

interface Props {
  links: Link[];
}

const Reddit = ({ links }: Props) => {
  return <List links={links} title="Reddit" Icon={Icon} />;
};

export default Reddit;
