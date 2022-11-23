import {Link} from 'types/link'

import {getRss} from './getRss'

// const exampleItem = {
//   author: 'Digg Editors'
//   description: 'I apologize for saying you could&#39;ve missed the upset of the tournament.&#xA;'
//   enclosure: ''
//   guid: 1275093
//   link: 'https://digg.com/sports/link/fifa-world-cup-day-three-highlights-I3PKNUhs6q'
//   pubDate: 'Tue, 22 Nov 2022 21:47:12 +0000'
//   title: 'FIFA World Cup Day Three Highlights'
// }

interface DiggItem {
  author: string
  description: string
  enclosure: string
  guid: string
  link: string
  pubDate: string
  title: string
}

const renderTitle = (title: string): string => {
  return title
    .replace(/&#39;/g, "'")
    .replace(/&#xA;/g, '')
    .replace(/&#x2F;/g, '/')
    .replace(/&amp;/g, '&')
}

const getDiggRss = async (): Promise<Link[]> => {
  const {rss} = await getRss('https://digg.com/rss/index.xml')
  return rss?.channel?.item?.map((item: DiggItem) => ({
    id: item.guid,
    title: renderTitle(item.title),
    date: item.pubDate,
    permalink: item.link,
    link: item.link,
  }))
}

export default getDiggRss
