import type {GetStaticProps, NextPage} from 'next'

import {getMediumPosts} from 'utils/medium'
import Link from 'next/link'
import {Link as ChakraLink} from '@chakra-ui/react'
import {Post} from 'types/post'

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

const Blog: NextPage<IBlog> = ({posts}) => {
  debugger
  return (
    <>
      <div>
        {posts.map((post, index) => (
          <ChakraNextLink href={post.link} key={post.id}>
            <h2>{post.title}</h2>
            <small>Posted {post.date}</small>
          </ChakraNextLink>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getMediumPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
