import axios from 'axios'
import { formatESResults } from '../../../util/addresses'

export default async function handler(req, res) {
    try {
      console.log('handler search', { searchValue: req.body.searchValue })

      const searchValue = req.body.searchValue
      const url = ` https://etherscan.io/searchHandler?term=${searchValue}&filterby=0`
      const response = await axios.get(url)

      console.log({ response: response.data })

      let tokens = []
      if (response.data) {
        tokens = formatESResults(response.data)
        console.log('formatESResults tokens', { tokens })
      }

      return res.status(200).send({ tokens })    
    } catch (error) {
      return res.status(400).send(error)
    }
  }