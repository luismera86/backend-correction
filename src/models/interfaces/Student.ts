import { Report } from "./Report"

export interface Student {
    name: string
	course: string
	commission: number
	reports: Report
	status?: boolean
}