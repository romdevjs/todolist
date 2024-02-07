import { FC } from 'react';
import {
  useAddTodoListMutation,
  useDeleteTodoListMutation,
  useGetTodoListsQuery,
  useUpdateTodoListMutation
} from '../../store/api/todolistsApi';
import { TodoListItem } from './TodoListItem';
import { AddItem } from '../common/AddItem';
import { maxTodoListTitleLength } from '../../utils/const';
import { DeleteTodoListRequest } from '../../types/TodoListTypes';
import { useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } from '../../store/api/tasksApi';
import { CreateTaskRequest, DeleteTaskRequest, UpdateTaskRequest } from '../../types/TaskTypes';

export const TodoLists: FC = () => {
  const { data: lists } = useGetTodoListsQuery();
  const [createTodoListMutation] = useAddTodoListMutation();
  const [deleteTodoListMutation] = useDeleteTodoListMutation();
  const [updateTodoListMutation] = useUpdateTodoListMutation();

  const [addTaskMutation] = useAddTaskMutation();
  const [deleteTaskMutation] = useDeleteTaskMutation();
  const [updateTaskMutation] = useUpdateTaskMutation();

  const addTodoList = (title: string) => createTodoListMutation({ title });
  const updateTodoList = (data: { tid: string, title: string }) => updateTodoListMutation(data);
  const deleteTodoList = (data: DeleteTodoListRequest) => deleteTodoListMutation(data);

  const addTask = (data: CreateTaskRequest) => addTaskMutation(data);
  const updateTask = (data: UpdateTaskRequest) => updateTaskMutation(data);
  const deleteTask = (data: DeleteTaskRequest) => deleteTaskMutation(data);

  return (
    <div className="todolists">
      <AddItem
        color="secondary"
        className="todolists__adding"
        onClick={addTodoList}
        maxValueLength={maxTodoListTitleLength}
      />

      <div className="todolists__wrapper">
        {lists && lists.map(l =>
          <TodoListItem
            key={l._id}
            tid={l._id}
            title={l.title}
            deleteTodoListCallBack={deleteTodoList}
            updateTodoListCallBack={updateTodoList}
            updateTaskCallBack={updateTask}
            deleteTaskCallBack={deleteTask}
            addTaskCallBack={addTask}
          />
        )}
      </div>
    </div>
  )
}