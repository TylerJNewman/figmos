export interface FeedItem {
  description: string
  guid: string
  link: string
  pubDate: string
  title: string
}

interface Channel {
  item: FeedItem[]
}

export interface Rss {
  channel: Channel
}

interface RssResponse {
  rss: Rss
}

export default RssResponse
