import { FC, useState } from 'react';
import { ListDTO } from '../../types/ListDTO';
import { TaskList } from '../task/TaskList';
import { AddItem } from '../common/AddItem';
import { maxTodoListTitleLength } from '../../utils/const';
import { EditTitle } from '../common/EditTitle';
import { OutlineButton } from '../common/OutlineButton';
import { IconButton } from '../common/IconButton';

interface ListProps extends ListDTO {

}

type FilterValue = 'all' | 'active' | 'completed';

export const TodoListItem: FC<ListProps> = ({ id,title, tasks }) => {
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const addTask = (title: string) => {
    console.log(title)
  }
  const changeTodoListTitle = (value: string) => {
    console.log(value)
  }

  const filterTasks = (value: FilterValue) => {
    let filteredTasks = tasks;
    if (value === 'active') filteredTasks = tasks.filter(f => f.isActive);
    if (value === 'completed') filteredTasks = tasks.filter(f => !f.isActive);
    setCurrentTasks(filteredTasks);
  }

  const deleteTodoList = () => {
    console.log(id)
  }

  return (
    <article className="todolists__item">
      <IconButton
        className='todolists__item-btn'
        onClick={deleteTodoList}
        color='error'
        icon='trash'
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
        <OutlineButton onClick={() => filterTasks('all')} text="All"/>
        <OutlineButton onClick={() => filterTasks('active')} color="primary" text="Active"/>
        <OutlineButton onClick={() => filterTasks('completed')} color="success" text="Completed"/>
      </div>
    </article>
  )
}