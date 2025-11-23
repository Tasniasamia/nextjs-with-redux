import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterController";
import postReducer from "./features/postControllerSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
