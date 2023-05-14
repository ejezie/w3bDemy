import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/auth.slice";

export const store = configureStore({
    reducer,
    devTools: true
})