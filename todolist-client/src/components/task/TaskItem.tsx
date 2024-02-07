import { FC } from 'react';
import { Checkbox } from '../common/Checkbox';
import { EditTitle } from '../common/EditTitle';
import { maxTaskTitleLength } from '../../utils/const';
import { IconButton } from '../common/IconButton';
import { UpdateTaskCallBackProps } from '../../types/TaskTypes';

interface TaskItemProps {
  id: string
  tid: string
  title: string
  isActive: boolean
  updateTaskCallBack: (data: UpdateTaskCallBackProps) => void
  deleteTaskCallBack: (id: string) => void
}

export const TaskItem: FC<TaskItemProps> = ({ id, title, isActive, deleteTaskCallBack, updateTaskCallBack }) => {
  const changeTaskStatus = (isActive: boolean) => updateTaskCallBack({ id, title, isActive });
  const changeTaskTitle = (title: string) => updateTaskCallBack({ id, title, isActive });
  const deleteTask = () => deleteTaskCallBack(id);

  return (
    <li className="tasks__item">
      <Checkbox
        isChecked={!isActive}
        onChange={changeTaskStatus}
        color="success"
      />

      <EditTitle
        className={isActive ? 'tasks__item-title' : 'tasks__item-title done'}
        title={title}
        changeTitle={changeTaskTitle}
        maxValueLength={maxTaskTitleLength}
      />

      <IconButton onClick={deleteTask} icon="trash" color="error" className="tasks__item-btn"/>
    </li>
  )
}