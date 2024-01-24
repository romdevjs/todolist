import { TaskDTO } from './TaskDTO';

export interface ListDTO {
  id: number
  uid: number
  title:string
  tasks: TaskDTO[]
}