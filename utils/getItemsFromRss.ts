import {Link} from 'types/link'
import {FeedItem, Rss} from 'types/rss'
import he from 'he'

const getItemsFromRss = (rss: Rss): Link[] => {
  return rss?.channel?.item?.map((item: FeedItem): Link => {
    const title = he.decode(item.title)
    const date = item.pubDate
    const link = item.link
    const id = item.guid

    return {id, title, date, link}
  })
}

export default getItemsFromRss
