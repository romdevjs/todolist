import { FC, useEffect, useState } from 'react';
import { ListDTO } from '../../types/ListDTO';
import { TaskList } from '../task/TaskList';
import { AddItem } from '../common/AddItem';
import { maxTodoListTitleLength } from '../../utils/const';
import { EditTitle } from '../common/EditTitle';
import { IconButton } from '../common/IconButton';
import { Button } from '../common/Button';

interface ListProps extends ListDTO {

}

type FilterValue = 'all' | 'active' | 'completed';

export const TodoListItem: FC<ListProps> = ({ id, title, tasks }) => {
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const [filter, setFilter] = useState<FilterValue>('all');
  const addTask = (title: string) => {
    console.log(title)
  }
  const changeTodoListTitle = (value: string) => {
    console.log(value)
  }

  const filterTasks = (value: FilterValue) => setFilter(value);

  const deleteTodoList = () => {
    console.log(id)
  }

  useEffect(() => {
    if (filter === 'all') setCurrentTasks(tasks);
    if (filter === 'active') setCurrentTasks(tasks.filter(f => f.isActive));
    if (filter === 'completed') setCurrentTasks(tasks.filter(f => !f.isActive));
  }, [filter]);

  return (
    <article className="todolists__item">
      <IconButton
        className="todolists__item-btn"
        onClick={deleteTodoList}
        color="error"
        icon="trash"
      />
      <EditTitle
        className="todolists__item-title"
        title={title + '11111111111111111111111111'}
        changeTitle={changeTodoListTitle}
        maxValueLength={maxTodoListTitleLength}
      />
      <AddItem maxValueLength={maxTodoListTitleLength} onClick={addTask} placeholder={'New task'}/>
      <TaskList tasks={currentTasks}/>
      <div className="todolists__item-buttons">
        <Button
          onClick={() => filterTasks('all')}
          text="All"
          isActive={filter === 'all'}
        />
        <Button
          onClick={() => filterTasks('active')}
          color="primary"
          text="Active"
          isActive={filter === 'active'}
        />
        <Button
          onClick={() => filterTasks('completed')}
          color="success"
          text="Completed"
          isActive={filter === 'completed'}
        />
      </div>
    </article>
  )
}