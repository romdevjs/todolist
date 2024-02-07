import { TaskDTO } from './TaskTypes';

export interface TodoListDTO {
  _id: string
  uid: string
  title: string
  tasks: TaskDTO[]
}

export interface DeleteTodoListRequest {
  tid:string
}

export interface UpdateTodoListRequest {
  tid:string
  title:string
}

export interface CreateTodoListRequest {
  title:string
}