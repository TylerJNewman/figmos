import React from "react";
import TechmemeIcon from "./TechmemeIcon";
import List from "./List";
import { Link } from "types/link";

const Icon: React.FC<{ className?: string }> = ({ className }) => <TechmemeIcon className={className} />;

interface Props {
  links: Link[];
}

const Techmeme = ({ links }: Props) => {
  return <List links={links} title="Techmeme" Icon={Icon} />;
};

export default Techmeme;
