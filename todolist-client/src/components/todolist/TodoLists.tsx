import { FC } from 'react';
import { useGetListsQuery } from '../../store/api/listApi';
import { TodoListItem } from './TodoListItem';
import { AddItem } from '../common/AddItem';
import { maxTodoListTitleLength } from '../../utils/const';

export const TodoLists:FC = () => {
  const { data: lists } = useGetListsQuery();
  const addTodoList = (value:string) => [
    console.log(value)
  ]

  return(
    <div className='todolists'>
      <div className="container">
        <AddItem
          color='secondary'
          className='todolists__adding'
          onClick={addTodoList}
          maxValueLength={maxTodoListTitleLength}
        />

        <div className="todolists__wrapper">
          {lists && lists.map(l => <TodoListItem key={l.id} id={l.id} uid={l.uid} title={l.title} tasks={l.tasks}/>)}
        </div>
      </div>
    </div>
  )
}