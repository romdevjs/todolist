import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'http://localhost:5000/api/';

export const baseQuery = fetchBaseQuery({
  baseUrl,
  headers:{
    authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmI4NzA0OTMwMTE1ZTQ0ZDJjMDAxNyIsImlhdCI6MTcwNzE3NDg1NX0.KBalYV2Cu82PvrNwKaMbXtHmF7euOiTEVwtSMlgQiu0'
  }
})

