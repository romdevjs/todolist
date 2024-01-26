import { FC } from 'react';
import { Checkbox } from '../common/Checkbox';
import { EditTitle } from '../common/EditTitle';
import { maxTaskTitleLength } from '../../utils/const';
import { IconButton } from '../common/IconButton';

interface TaskItemProps {
  id:number
  isActive:boolean
  title:string
}

export const TaskItem:FC<TaskItemProps> = ({id,title,isActive}) => {
  const changeTaskStatus = (value:boolean) => {
    console.log(id,value)
  }

  const changeTaskTitle = (value:string) => {
    console.log(value)
  }

  const deleteTask = () => {
    console.log(id)
  }

  return(
    <li className="tasks__item">
      <Checkbox
        isChecked={isActive}
        onChange={changeTaskStatus}
      />

      <EditTitle
        className={isActive ? 'tasks__item-title' : 'tasks__item-title done'}
        title={title}
        changeTitle={changeTaskTitle}
        maxValueLength={maxTaskTitleLength}
      />

      <IconButton onClick={deleteTask} icon='trash' color='error' className='tasks__item-btn'/>
    </li>
  )
}