import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, AppDispatch } from './store'

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;