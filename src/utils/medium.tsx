import Parser from 'rss-parser'
import type {MediumPost} from '../types/medium'
import type {Post} from '../types/post'

export const getMediumPosts = async (): Promise<Post[]> => {
  const parser = new Parser()
  const {items} = (await parser.parseURL(
    'https://medium.com/feed/@nntaleb',
  )) as {items: MediumPost[]}

  const posts: Post[] = items.map(
    ({
      guid,
      title,
      link,
      isoDate,
      ['content:encodedSnippet']: excerpt = '',
    }) => {
      return {
        id: guid,
        title,
        link,
        excerpt,
        date: isoDate,
      }
    },
  )

  return posts
}
