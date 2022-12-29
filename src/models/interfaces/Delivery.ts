import { Student } from './Student'

export interface Delivery {
  evaluationOne: {
    comment: string
    status: string
  }
  evaluationTow: {
    comment: string
    status: string
  }
  evaluationThree: {
    comment: string
    status: string
  }
  evaluationFour: {
    comment: string
    status: string
  }
  evaluationFive: {
    comment: string
    status: string
  }
  feedback: string
  student: Student
  preDeliveryNumber: number
  result: string
}
