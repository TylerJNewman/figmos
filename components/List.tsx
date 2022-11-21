import React from "react";
import { Link } from "types/link";
import NextLink from "next/link";
import { parseISO, format } from "date-fns";
import Divider from "./Divider";
import Container from "./Container";

interface Props {
  links: Link[];
  title: string;
  Icon: React.FC<{ className?: string }>;
}

interface CenterProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Center = ({ children, className, style }: CenterProps) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full h-full ${className}`} style={style}>
      {children}
    </div>
  );
};

const List = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <ul className={`w-full h-full ${className}`} style={style}>
      {children}
    </ul>
  );
};

const Text = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <p className={`text-th-primary-dark ${className}`} style={style}>
      {children}
    </p>
  );
};

// Stack adds a gap between its children except for the last child
const Stack = ({
  children,
  className,
  style,
  gap = 1,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gap?: number;
}) => {
  return (
    <div className={`${className}`} style={style}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            marginBottom: index === React.Children.count(children) - 1 ? 0 : `${gap * 4}px`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

const MyList = ({ links, title, Icon }: Props) => {
  const isLastPost = (index: number) => index === links.length - 1;
  return (
    <Center className="mb-14">
      <Container>
        <Stack gap={2}>
          {/* <Divider className="border-th-primary-dark border-2" /> */}
          <div className="flex items-center w-full">
            <Icon className="w-10 h-10 mr-2" />
            <Text className="text-2xl font-bold">{title}</Text>
          </div>

          <Divider className="border-th-primary-dark border-2" />

          <List className="h-full border-gray-200 py-2">
            <Stack gap={0}>
              {links.map((post, index) => (
                <>
                  <li key={index} className="flex ">
                    <NextLink href={post.permalink}>
                      <Icon
                        className="h-6 w-6 text-th-primary-dark
                        mr-3 flex-shrink-0"
                      />
                    </NextLink>

                    <NextLink href={post.link}>
                      <Text className="font-medium">{post.title}</Text>
                    </NextLink>
                  </li>
                  {isLastPost(index) ? null : <Divider className="my-2" />}
                </>
              ))}
            </Stack>
          </List>
        </Stack>
      </Container>
    </Center>
  );
};

export default MyList;
