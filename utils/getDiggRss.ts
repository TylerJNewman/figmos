import {Link} from 'types/link'
import getItemsFromRss from './getItemsFromRss'

import {getRss} from './getRss'

const getDiggRss = async (): Promise<Link[]> => {
  const {rss} = await getRss('https://digg.com/rss/index.xml')
  return getItemsFromRss(rss)
}

export default getDiggRss
