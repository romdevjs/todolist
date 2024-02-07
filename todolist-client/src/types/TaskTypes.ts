export interface TaskDTO {
  _id:string
  tid:string
  title:string
  isActive:boolean
}

export interface GetTasksRequest {
  tid: string
}

export interface CreateTaskRequest{
  tid: string
  title: string
}

export interface UpdateTaskRequest{
  tid: string
  id: string
  title: string
  isActive: boolean
}

export interface DeleteTaskRequest{
  tid: string
  id: string
}

export interface UpdateTaskCallBackProps {
  id: string
  title: string
  isActive: boolean
}