import { FC } from 'react';
import { TaskDTO } from '../../types/TaskDTO';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: TaskDTO[]
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="tasks">
      {
        tasks.map(t => <TaskItem key={t.id} {...t}/>)
      }
    </ul>
  )
}