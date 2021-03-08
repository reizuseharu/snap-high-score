import {Course} from "../components/Course"

type OptionalCourse = Course | null | undefined

export interface AttackVariant {
  name: string
  course: OptionalCourse
}
