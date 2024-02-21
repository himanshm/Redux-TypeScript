// create a more type-aware version of the default useSelector and useDispatch hooks, a version that is specifically aware of the data that we are managing in our store.

import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { AppDispatch, RootState } from './store.ts';

type DispatchFucntion = () => AppDispatch;

// Select data to read the data from the Redux store
// Dispatch actions to change the data in the Redux store

export const useAppDispatch: DispatchFucntion = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// TypedUseSelectorHook is a generic type and the related type it needs is a type that describes the data in our store.
