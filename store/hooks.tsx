import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux'
import { AppDispatch, AppState } from './store'

export const useDispatch = () => useAppDispatch<AppDispatch>()

export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector
