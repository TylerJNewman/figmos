import {Link} from 'types/link'
import decodeHtml from './decodeHtml'
import getItemsFromRss from './getItemsFromRss'

import {getRss} from './getRss'

const getTechmemeRss = async (): Promise<Link[]> => {
  const {rss} = await getRss('https://www.techmeme.com/feed.xml')
  return getItemsFromRss(rss)
}

export default getTechmemeRss
