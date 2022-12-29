import cors from 'cors'
import { dataInfo } from './config/data.config'
import express from 'express'
import { main } from './config/dbMongo.config'
import router from './routes'

const { PORT } = dataInfo
const app = express()

main()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Conectado al servidor en el puerto ${PORT}`)
})
