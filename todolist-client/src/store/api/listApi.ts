import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './api';
import { ListDTO } from '../../types/ListDTO';

export const listApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/lists`
  }),
  tagTypes: ['todos'],
  endpoints: (build) => ({
    getLists: build.query<ListDTO[], void>({
      query: () => ({
        url: '/',
        method:'GET'
      })
    })
  })
})

export const { useGetListsQuery } = listApi