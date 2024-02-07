import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// dispatch(loginUser({username: "kminchelle", password: "0lelplR"}))
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data) => {
        const response = await axios.post("https://dummyjson.com/auth/login", data)
        return response.data
    }
)

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
                localStorage.setItem("token", JSON.stringify(action.payload.token))
            })
    }
})

export const authReducer = AuthSlice.reducer