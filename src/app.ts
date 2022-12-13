import express from 'express'
import { main } from './config/dbMongo.config'

const app = express()


main()
app.listen(3000, () => {
  console.log('Conectado al servidor')
}
)