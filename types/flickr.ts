// flicker sdk declaration file
export interface Photo {
  id: string
  owner: string
  secret: string
  server: string
  farm: number
  title: string
  ispublic: number
  isfriend: number
  isfamily: number
  description: any
  license: string
  dateupload: string
  datetaken: string
  datetakengranularity: number
  datetakenunknown: number
  ownername: string
  iconserver: string
  iconfarm: number
  views: string
  tags: string
  machine_tags: string
}

export interface Photos {
  page: number
  pages: number
  perpage: number
  total: number
  photo: Photo[]
}

export interface FlickrPhotos {
  photos: Photos
  stat: string
}

export interface FlickrTags {
  hottags: {
    tag: {
      id: string
      _content: string
    }[]
    total: number
    count: number
    hotness: number
    period: string
    stat: string
    _content: string
  }
}

export interface Flickr {
  photos: {
    search: (options: {
      user_id: string
      page: number
      per_page: number
      tags: string
      sort: string
    }) => Promise<FlickrPhotos>
  }
}
