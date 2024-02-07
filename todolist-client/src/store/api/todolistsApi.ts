import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import {
  CreateTodoListRequest,
  DeleteTodoListRequest,
  TodoListDTO,
  UpdateTodoListRequest
} from '../../types/TodoListTypes';

export const todolistsApi = createApi({
  baseQuery: baseQuery,
  reducerPath:'todolistsApi',
  tagTypes: ['todos'],
  endpoints: (build) => ({
    getTodoLists: build.query<TodoListDTO[], void>({
      query: () => ({
        url: 'todolists/',
        method: 'GET'
      }),
      providesTags: ['todos'],
    }),
    addTodoList: build.mutation<TodoListDTO, CreateTodoListRequest>({
      query: (body) => ({
        url: 'todolists/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['todos']
    }),
    updateTodoList: build.mutation<TodoListDTO, UpdateTodoListRequest>({
      query: ({ title, tid }) => ({
        url: `todolists/${tid}`,
        method: 'PUT',
        body: { title }
      }),
      invalidatesTags: ['todos']
    }),
    deleteTodoList: build.mutation<{ message: string }, DeleteTodoListRequest>({
      query: ({ tid }) => ({
        url: `todolists/${tid}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['todos']
    })
  })
})

export const {
  useGetTodoListsQuery,
  useAddTodoListMutation,
  useUpdateTodoListMutation,
  useDeleteTodoListMutation,
} = todolistsApi;