import React from "react";
import { Link } from "types/link";
import NextLink from "next/link";
import { parseISO, format } from "date-fns";

const sortByDate = (postA: Link, postB: Link) => (parseISO(postA.date) > parseISO(postB.date) ? -1 : 1);
const formatDate = (date: string) => format(parseISO(date), "LLLL d, yyyy");

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

const Container = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={style}>
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

const Divider = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return <div className={`w-full h-px bg-th-primary-light ${className}`} style={style} />;
};

const MyList = ({ links, title, Icon }: Props) => {
  const isLastPost = (index: number) => index === links.length - 1;
  return (
    <Center className="h-full mb-14">
      <Container className="h-full max-w-lg">
        <Stack gap={2}>
          <Divider />
          <Text className="text-2xl font-bold">{title}</Text>
          <Divider />

          <List className="h-full border-gray-200 py-2">
            <Stack gap={0}>
              {links.map((post, index) => (
                <>
                  <li key={index} className="flex ">
                    <NextLink href={post.permalink}>
                      <Icon
                        className="h-5 w-5 text-th-primary-dark
                        mr-2 mt-1 flex-shrink-0"
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
