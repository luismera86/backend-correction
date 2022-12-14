import { model, Schema } from 'mongoose'
import { Delivery } from './interfaces'

const deliverySchema = new Schema<Delivery>({
  commentOne: {
    type: String,
  },
  commentTow: {
    type: String,
  },
  commentThree: {
    type: String,
  },
  commentFour: {
    type: String,
  },
  commentFive: {
    type: String,
  },
  feedback: {
    type: String,
  },
  preDeliveryNumber: {
    type: Number,
  },
  student: {
    name: {
      type: String,
    },
    tutor: {
      type: String,
    },
    commission: {
      type: Number,
    },
    course: {
      type: String,
    },
  },
  result: {
    type: String,
  },
})

const Delivery = model<Delivery>('Delivery', deliverySchema)

export default Delivery
