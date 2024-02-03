import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get("https://dummyjson.com/todossss")
        return response.data
    }
)


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        loading: false,
        items: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.items = action.payload.todos
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message
            })
    },
})

export const todosReducer = todosSlice.reducer