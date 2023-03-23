import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('./dist'))

app.listen(8080, () =>
  console.log(`Server running on http://localhost:${8080}`)
)
