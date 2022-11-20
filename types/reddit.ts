export interface Subreddit {
  data: {
    modhash: string;
    dist: number;
    children: ThreadItem[];
  };
  kind: "Listing";
}

export interface ImageVersion {
  height: number;
  url: string;
  width: number;
}

export interface Image {
  source: ImageVersion;
  resolutions: ImageVersion[];
  variants: {};
  id: string;
}

export interface ThreadItem {
  data: {
    author: string;
    created_utc: number;
    distinguished: "moderator" | false;
    domain: string;
    downs: number;
    edited: boolean;
    gilded: number;
    locked: boolean;
    media_embed: {};
    id: string;
    is_self: boolean;
    name: string;
    num_comments: number;
    over_18: boolean;
    preview?: {
      enabled: boolean;
      images: Image[];
    };
    score: number;
    selftext: string;
    selftext_html: string | null;
    spoiler: boolean;
    stickied: boolean;
    subreddit: string;
    thumbnail: string;
    thumbnail_width: number | null;
    title: string;
    url: string;
    permalink: string;
    ups: number;
  };
  kind: "t3";
}
