import React from "react";
import NyTimesIcon from "./NyTimesIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <NyTimesIcon className={className} />;

interface Props {
  links: Link[];
}

const NyTimes = ({ links }: Props) => {
  return <List links={links} title="NyTimes" Icon={Icon} />;
};

export default NyTimes;
