import {configureStore} from "@reduxjs/toolkit";
import photoReducer from "../components/main/photoSlice";
export const store = configureStore({
    reducer: {
        photo: photoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;