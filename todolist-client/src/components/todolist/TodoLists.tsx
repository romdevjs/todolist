import { FC } from 'react';
import { useGetListsQuery } from '../../store/api/listApi';
import { TodoListItem } from './TodoListItem';

export const TodoLists:FC = () => {
  const { data: lists } = useGetListsQuery();

  return(
    <div className='todolists'>
      <div className="container">
        <div className="todolists__wrapper">
          {lists && lists.map(l => <TodoListItem key={l.id} id={l.id} uid={l.uid} title={l.title} tasks={l.tasks}/>)}
        </div>
      </div>
    </div>
  )
}