// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// anything in this folder (API) should not return a react component
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
