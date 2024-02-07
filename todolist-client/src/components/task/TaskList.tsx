import { FC } from 'react';
import { TaskDTO, UpdateTaskCallBackProps } from '../../types/TaskTypes';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: TaskDTO[]
  updateTaskCallBack:(data:UpdateTaskCallBackProps) => void
  deleteTaskCallBack:(id:string) => void
}

export const TaskList: FC<TaskListProps> = ({ tasks, deleteTaskCallBack, updateTaskCallBack }) => {
  return (
    <ul className="tasks">
      {
        tasks.map(t => (
          <TaskItem
            key={t._id}
            id={t._id}
            tid={t.tid}
            title={t.title}
            isActive={t.isActive}
            deleteTaskCallBack={deleteTaskCallBack}
            updateTaskCallBack={updateTaskCallBack}
          />
        ))
      }
    </ul>
  )
}