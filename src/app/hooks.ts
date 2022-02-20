import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import type {RootState, AppDispatch} from "./store";

//Re-export functions with type aware
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;