import { Report } from './Report'

export interface Student {
  name: string
  course: string
  tutor: string
  commission: number
  reports: Report
  status?: boolean
}
