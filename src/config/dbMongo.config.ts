import { dataInfo } from './data.config'
import mongoose from 'mongoose'

const { MONGODB_URL } = dataInfo
export const main = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
    console.log('Conectado con la base de datos Mongo')
  } catch (error) {
    console.log(error)
  }
}
