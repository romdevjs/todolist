import { FC, LegacyRef, useRef } from 'react';
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
import { Empty } from '../common/Empty';
import { Loader } from '../common/Loader';

export const TodoLists: FC = () => {
  const inputRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const { data: lists, isSuccess, isFetching } = useGetTodoListsQuery();
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

  const focusToInput = () => inputRef.current?.focus();


  return (
    <div className="todolists">
      {isFetching && <Loader/>}

      {isSuccess && !isFetching &&
        <>
          <AddItem
            color="secondary"
            className="todolists__adding"
            onClick={addTodoList}
            maxValueLength={maxTodoListTitleLength}
            disabled={false}
            inputRef={inputRef}
          />
          <div className="todolists__wrapper">
            {lists.length > 0
              ? <>
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
              </>
              : <Empty>
                <div className="todolists__empty">
                  <div>Empty</div>
                  <button onClick={focusToInput} className="todolists__empty-btn">Click to create your first list</button>
                </div>
              </Empty>
            }
          </div>
        </>
      }
    </div>
  )
}