import endpoint from '../endpoint'
import { GET } from '../method'

const getAllNews = () => GET(endpoint.news)

const NEWS = {
  getAllNews
}

export default NEWS
