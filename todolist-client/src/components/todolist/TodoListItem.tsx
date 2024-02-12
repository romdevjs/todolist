import { FC, useEffect, useState } from 'react';
import { TaskList } from '../task/TaskList';
import { AddItem } from '../common/AddItem';
import { maxTodoListTitleLength } from '../../utils/const';
import { EditTitle } from '../common/EditTitle';
import { IconButton } from '../common/IconButton';
import { Button } from '../common/Button';
import {
  CreateTaskRequest,
  DeleteTaskRequest,
  TaskDTO,
  UpdateTaskCallBackProps,
  UpdateTaskRequest
} from '../../types/TaskTypes';
import { DeleteTodoListRequest } from '../../types/TodoListTypes';
import { useGetTasksQuery } from '../../store/api/tasksApi';

interface ListProps {
  tid: string
  title: string
  updateTodoListCallBack: (data: { tid: string, title: string }) => void
  deleteTodoListCallBack: (data: DeleteTodoListRequest) => void
  addTaskCallBack: (data: CreateTaskRequest) => void
  updateTaskCallBack: (data: UpdateTaskRequest) => void
  deleteTaskCallBack: (data: DeleteTaskRequest) => void
}

type FilterValue = 'all' | 'active' | 'completed';

export const TodoListItem: FC<ListProps> = (
  {
    tid,
    title,
    updateTodoListCallBack,
    deleteTodoListCallBack,
    deleteTaskCallBack,
    updateTaskCallBack,
    addTaskCallBack
  }
) => {
  const [currentTasks, setCurrentTasks] = useState<TaskDTO[]>([]);
  const [filter, setFilter] = useState<FilterValue>('all');

  const { data: tasks, isFetching } = useGetTasksQuery({ tid });

  const changeTodoListTitle = (title: string) => updateTodoListCallBack({ tid, title });
  const deleteTodoList = () => deleteTodoListCallBack({ tid });

  const addTask = (title: string) => addTaskCallBack({ tid, title });
  const updateTask = (data: UpdateTaskCallBackProps) => updateTaskCallBack({ tid, ...data });
  const deleteTask = (id: string) => deleteTaskCallBack({ tid, id });

  const filterTasks = (value: FilterValue) => setFilter(value);

  useEffect(() => {
    if (tasks) {
      if (filter === 'all') setCurrentTasks(tasks);
      if (filter === 'active') setCurrentTasks(tasks.filter(f => f.isActive));
      if (filter === 'completed') setCurrentTasks(tasks.filter(f => !f.isActive));
    }
  }, [filter, tasks]);

  return (
    <article className="todolists__item">
      <IconButton
        className="todolists__item-btn"
        onClick={deleteTodoList}
        color="error"
        icon="trash"
        disabled={isFetching}
      />
      <EditTitle
        className="todolists__item-title"
        title={title}
        changeTitle={changeTodoListTitle}
        maxValueLength={maxTodoListTitleLength}
        disabled={isFetching}
      />
      <AddItem
        className="todolists__item-adding"
        maxValueLength={maxTodoListTitleLength}
        onClick={addTask}
        color="primary"
        disabled={isFetching}
      />

      {currentTasks.length > 0
        ? <TaskList
          tasks={currentTasks}
          deleteTaskCallBack={deleteTask}
          updateTaskCallBack={updateTask}
        />
        : <div className='todolists__item-empty'>Empty</div>
      }

      {tasks && tasks.length > 0 && <div className="todolists__item-buttons">
        <Button
          onClick={() => filterTasks('all')}
          text="All"
          isActive={filter === 'all'}
          disabled={isFetching}
        />
        <Button
          onClick={() => filterTasks('active')}
          color="primary"
          text="Active"
          isActive={filter === 'active'}
          disabled={isFetching}
        />
        <Button
          onClick={() => filterTasks('completed')}
          color="success"
          text="Completed"
          isActive={filter === 'completed'}
          disabled={isFetching}
        />
      </div>}
    </article>
  )
}