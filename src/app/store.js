import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import movieReduser from "../features/user/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReduser,
    },
    middleware: getDefaultMiddleware({
        serializableCheck : false,
    }),
});