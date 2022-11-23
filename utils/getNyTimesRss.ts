import {Link} from 'types/link'
import getItemsFromRss from './getItemsFromRss'

import {getRss} from './getRss'

const getNyTimes = async (): Promise<Link[]> => {
  const {rss} = await getRss(
    'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
  )
  return getItemsFromRss(rss)
}

export default getNyTimes
