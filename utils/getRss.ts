import {XMLParser} from 'fast-xml-parser'
import axios from 'axios'

export const getRss = async (url: string): Promise<any> => {
  const parser = new XMLParser()
  const {data: buffer} = await axios.get<Buffer>(url, {
    responseType: 'arraybuffer',
  })
  const xml = buffer.toString('utf-8')
  const json = parser.parse(xml)
  return json
}
