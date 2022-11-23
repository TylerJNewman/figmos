import React from "react";
import DiggIcon from "./DiggIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <DiggIcon className={className} />;

interface Props {
  links: Link[];
}

const Digg = ({ links }: Props) => {
  return <List links={links} title="Digg" Icon={Icon} />;
};

export default Digg;
