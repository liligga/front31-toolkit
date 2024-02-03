import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get("https://dummyjson.com/todos")
        return response.data
    }
)

export const fetchTodosWithFetch = createAsyncThunk(
    "todos/fetchTodosWithFetch",
    async (_, thunkAPI) => {
        const response = await fetch("https://dummyjson.com/todos")
        if (!response.ok) {
            return thunkAPI.rejectWithValue("Something went wrong")
        }
        return response.json()
    }
)

// TODO: delete todo
// dispatch(deleteTodo(4))
export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id) => {
        const response = await axios.delete(`https://dummyjson.com/todos/${id}`)
        return response.data
    }
)

// TODO: add todo
// dispatch(addTodo({userId: 1, todo: "new todo", completed: false}))
export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (todo) => {
        const response = await axios.post("https://dummyjson.com/todos/add", todo)
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
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.items = action.payload.todos
                state.loading = false
                state.error = null
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = state.items.filter(item => item.id !== action.payload.id)
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.unshift(action.payload)
            })
            .addCase(fetchTodosWithFetch.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchTodosWithFetch.rejected, (state, action) => {
                state.error = action.error
            })
    },
})

export const todosReducer = todosSlice.reducer