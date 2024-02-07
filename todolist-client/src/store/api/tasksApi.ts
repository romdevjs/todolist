import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import {
  CreateTaskRequest,
  DeleteTaskRequest,
  GetTasksRequest,
  TaskDTO,
  UpdateTaskRequest
} from '../../types/TaskTypes';

export const tasksApi = createApi({
  baseQuery,
  reducerPath: 'taskApi',
  tagTypes: ['tasks'],
  endpoints: (build) => ({
    getTasks: build.query<TaskDTO[], GetTasksRequest>({
      query: ({ tid }) => ({
        url: `tasks/${tid}`,
        method: 'GET',
      }),
      providesTags: ['tasks']
    }),

    addTask: build.mutation<TaskDTO, CreateTaskRequest>({
      query: ({ tid, title }) => ({
        url: `tasks/${tid}`,
        method: 'POST',
        body: { title }
      }),
      invalidatesTags: ['tasks']
    }),

    updateTask: build.mutation<TaskDTO, UpdateTaskRequest>({
      query: ({ tid, id, title, isActive }) => ({
        url: `tasks/${tid}/${id}`,
        method: 'PUT',
        body: { title, isActive }
      }),
      invalidatesTags: ['tasks']
    }),

    deleteTask: build.mutation<{ message: string }, DeleteTaskRequest>({
      query: ({ tid, id }) => ({
        url: `tasks/${tid}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks']
    })
  })
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi;