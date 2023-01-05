// get recent photos from flickr from explorer page
// @ts-ignore
import Flickr from 'flickr-sdk'
const flickr = new Flickr(process.env.FLICKR_API_KEY)

export async function getFlickr() {
  const photos = await flickr.photos.getRecent({
    per_page: 20,
    extras: 'url_o',
  })
  return photos.body.photos.photo
}
