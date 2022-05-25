import type {GetStaticProps, NextPage} from 'next'

import {getMediumPosts} from 'utils/medium'
import Link from 'next/link'
import {
  Link as ChakraLink,
  List,
  useColorModeValue as mode,
  Stack,
  Text,
  Container,
  Divider,
  Center,
} from '@chakra-ui/react'

import {Post} from 'types/post'
import {parseISO, format} from 'date-fns'

function ChakraNextLink({href, children, ...props}) {
  return (
    <Link href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </Link>
  )
}

type IBlog = {
  posts: Post[]
}

const sortByDate = (postA: Post, postB: Post) =>
  parseISO(postA.date) > parseISO(postB.date) ? -1 : 1

const formatDate = (date: string) => format(parseISO(date), 'LLLL d, yyyy')

const Blog: NextPage<IBlog> = ({posts}) => {
  const isLastPost = (index: number) => index === posts.length - 1
  return (
    <Center h="calc(100vh)">
      <Container maxW="lg">
        <List border="1px" borderColor="gray.200" py={2}>
          {posts.map((post, index) => (
            <>
              <ChakraNextLink
                key={post.id}
                aria-current={post.id === '2' ? 'page' : undefined}
                _hover={{
                  textDecoration: 'none',
                  bg: mode('gray.100', 'gray.700'),
                }}
                _activeLink={{
                  bg: 'gray.700',
                  color: 'white',
                }}
                borderRadius={{
                  lg: 'lg',
                }}
                href={post.link}
              >
                <Stack
                  spacing="1"
                  py={{
                    base: '3',
                    lg: '2',
                  }}
                  px={{
                    base: '4.5',
                    lg: '4',
                  }}
                  fontSize="sm"
                  lineHeight="1.25rem"
                >
                  <Text fontWeight="medium">{post.title}</Text>
                  <Text opacity={0.6}>Published {formatDate(post.date)}</Text>
                  <Text opacity={0.8} noOfLines={1}>
                    {post.excerpt}
                  </Text>
                </Stack>
              </ChakraNextLink>
              {isLastPost(index) ? null : <Divider m={2} />}
            </>
          ))}
        </List>
      </Container>
    </Center>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getMediumPosts()).sort(sortByDate).slice(0, 5)

  return {
    props: {
      posts,
    },
  }
}

export default Blog
