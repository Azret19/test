import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./slices/postsSlice";


const store = configureStore({
    reducer: {
        cards: cardReducer
    }
})

export default store