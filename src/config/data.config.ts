import dotenv from 'dotenv'

dotenv.config()

export const dataInfo = {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/correction',
  PORT: process.env.PORT || 3000,
}
