import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { todolistsApi } from './api/todolistsApi';
import { tasksApi } from './api/tasksApi';


export const store = configureStore({
  reducer: {
    [todolistsApi.reducerPath]: todolistsApi.reducer,
    [tasksApi.reducerPath]:tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      todolistsApi.middleware,
      tasksApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;