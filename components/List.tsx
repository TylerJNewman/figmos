import React from "react";
import { Link } from "types/link";
import NextLink from "next/link";
import { parseISO, format } from "date-fns";
import Divider from "./Divider";
import Container from "./Container";
import Tooltip from "./Tooltip";

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

const formatDateToTimeago = (date: string) => {
  const parsedDate = parseISO(date);
  const now = new Date();
  const diff = now.getTime() - parsedDate.getTime();
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInYears > 0) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  }

  if (diffInMonths > 0) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  }

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  return "just now";
};

const formatToTime = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, "h:mm a");
};

const MyList = ({ links, title, Icon }: Props) => {
  const isLastPost = (index: number) => index === links.length - 1;
  return (
    <Center>
      <Container
        className="
        flex flex-col items-end justify-between w-full h-full
      "
      >
        <Stack gap={2}>
          <Divider />
          <div className="flex items-center w-full">
            <Icon className="w-6 h-6 mx-5" />
            <Text className="text-2xl font-bold">{title}</Text>
          </div>

          {/* <Divider className="border-th-primary-dark border-2" /> */}
          <Divider />
          <List className="h-full border-gray-200">
            <Stack gap={0}>
              {links.map((post, index) => (
                <>
                  {/* <li key={index}>
                    <div className="flex items-center">
                      <NextLink href={post.permalink}>
                        <Icon
                          className="h-4 w-4 text-th-primary-dark
                        mx-6 flex-shrink-0"
                        />
                      </NextLink>

                      <NextLink href={post.link}>
                        <Text className="font-medium">{post.title}</Text>
                      </NextLink>
                    </div>
                    <Text className="text-sm text-th-primary-light">{format(parseISO(post.date), "MMM d, yyyy")}</Text>
                  </li> */}
                  <li key={index}>
                    {/* <div className="flex items-start py-5 pl-6"> */}
                    <div className="flex items-start">
                      <NextLink href={post.permalink}>
                        <Icon className="h-4 w-4 text-th-primary-dark mx-6 flex-shrink-0 mt-1" />
                      </NextLink>
                      {/* <div className="pl-3 pr-10 mt-1"> */}
                      <div className="">
                        <NextLink href={post.link}>
                          <Text className="font-medium">{post.title}</Text>
                        </NextLink>
                        {/* <Tooltip text={formatToTime(post.date)}> */}
                        <Text className="text-sm text-th-primary-light">{formatDateToTimeago(post.date)}</Text>
                        {/* </Tooltip> */}
                      </div>
                    </div>
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
