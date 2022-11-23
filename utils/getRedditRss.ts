import {XMLParser} from 'fast-xml-parser'
import axios from 'axios'

const getRedditRss = async (): Promise<any> => {
  const {data} = await axios.get('https://www.reddit.com/r/news/.rss')
  const parser = new XMLParser()
  const json = parser.parse(data)
  return json.feed.entry
}

export default getRedditRss
