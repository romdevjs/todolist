import { FC } from 'react';
import { ListDTO } from '../../types/ListDTO';
import { TaskList } from '../task/TaskList';
import { AddItem } from '../common/AddItem';

interface ListProps extends ListDTO {

}

export const TodoListItem: FC<ListProps> = ({ title, tasks }) => {
  const addTask = (title:string) => {
    console.log(title)
  }
  return (
    <article className="todolists__item">
      <h3 className="todolists__item-title">{title}</h3>
      <AddItem maxValueLength={10} clickHandler={addTask} placeholder={'New task'}/>
      <TaskList tasks={tasks}/>
    </article>
  )
}