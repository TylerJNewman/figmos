export type Story = {
  id: number
  title: string
  points: number | null
  user: string | null
  time: number
  time_ago: string
  content: string
  deleted?: boolean
  dead?: boolean
  type: string
  url: string
  domain?: string
  comments: Comment[] // Comments are items too
  level: number
  comments_count: number
}

export type Comment = {
  comments: Comment[]
  content: string
  id: number
  level: number
  time: number
  time_ago: string
  type: string
  url: string
  user: string
}

export type Ask = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  text: string
  time: number
  title: string
  type: string
}

export type Job = {
  by: string
  id: number
  score: number
  text: string
  time: number
  title: string
  type: string
  url: string
}

export type Poll = {
  by: string
  descendants: number
  id: number
  kids: number[]
  parts: number[]
  score: number
  text: string
  time: number
  title: string
  type: string
}

export type User = {
  about: string
  created: number
  delay: number
  id: string
  karma: number
  submitted: number[]
}

export type Stories = number[]
