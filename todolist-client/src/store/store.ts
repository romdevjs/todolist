import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { listApi } from './api/listApi';


export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      listApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;