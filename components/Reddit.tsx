import React from "react";
import { Link } from "types/link";
import NextLink from "next/link";
import { parseISO, format } from "date-fns";
import AlienIcon from "./AlienIcon";

const sortByDate = (postA: Link, postB: Link) => (parseISO(postA.date) > parseISO(postB.date) ? -1 : 1);
const formatDate = (date: string) => format(parseISO(date), "LLLL d, yyyy");

interface Props {
  links: Link[];
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

const MyLink = ({
  children,
  className,
  style,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href: string;
}) => {
  return (
    <a className={`text-th-primary-dark ${className}`} style={style} href={href}>
      {children}
    </a>
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

const ChatIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      style={style}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="
          M4 16h16M4 8h16M4 12h16M15 3v.01M12 3v.01M9 3v.01
        "
      />
    </svg>
  );
};

const Reddit = ({ links }: Props) => {
  const isLastPost = (index: number) => index === links.length - 1;
  return (
    <Center className="h-full mb-14">
      <Container className="h-full max-w-lg">
        <Stack gap={2}>
          <Divider />
          <Text className="text-2xl font-bold">Reddit</Text>
          <Divider />

          <List className="h-full border-gray-200 py-2">
            <Stack gap={0}>
              {links.map((post, index) => (
                <>
                  <li key={index} className="flex ">
                    <NextLink href={post.permalink}>
                      {/* <ChatIcon
												className="h-5 w-5 text-th-primary-dark
                      mr-2 mt-1 flex-shrink-0"
												aria-hidden="true"
											/> */}
                      <AlienIcon
                        className="h-5 w-5 text-th-primary-dark
                        mr-2 mt-1 flex-shrink-0"
                      />
                    </NextLink>

                    <NextLink href={post.link}>
                      <Text className="font-medium">{post.title}</Text>
                    </NextLink>
                    {/* <MyLink href={post.permalink}>
									<Text className="font-medium" color="blue">
										{post.permalink}
									</Text>
								</MyLink> */}
                    {/* <Text className="font-medium">{formatDate(post.date)}</Text> */}
                  </li>
                  {isLastPost(index) ? null : <Divider className="my-2" />}

                  {/* <Flex justifyContent={"space-between"}>
								<My  w="100%">
									<MyLink href={post.link}>
										<Text fontWeight="medium">{post.title}</Text>
										<Text opacity={0.6}>Published {formatDate(post.date)}</Text>
									</MyLink>
								</My>

								<MyStack>
									<MyLink href={post.permalink}>
										<ChatIcon m="1" />
									</MyLink>
								</MyStack>
							</Flex>
							{isLastPost(index) ? null : <Divider m={2} />} */}
                </>
              ))}
            </Stack>
          </List>
        </Stack>
      </Container>
    </Center>
  );
};

export default Reddit;
