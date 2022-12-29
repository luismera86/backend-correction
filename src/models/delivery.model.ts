import { model, Schema } from 'mongoose'
import { Delivery } from './interfaces'

const deliverySchema = new Schema<Delivery>({
  evaluationOne: {
    comment: {
      type: String
    },
    status: {
      type: String
    },
  },
  evaluationTow: {
    comment: {
      type: String
    },
    status: {
      type: String
    },
  },
  evaluationThree: {
    comment: {
      type: String
    },
    status: {
      type: String
    },
  },
  evaluationFour: {
    comment: {
      type: String
    },
    status: {
      type: String
    },
  },
  evaluationFive: {
    comment: {
      type: String
    },
    status: {
      type: String
    },
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
