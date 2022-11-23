const decodeHtml = (title: string): string => {
  return title
    .replace(/&#39;/g, "'")
    .replace(/&#xA;/g, '')
    .replace(/&#x2F;/g, '/')
    .replace(/&amp;/g, '&')
}

export default decodeHtml
