import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "igor",
        email: "email@example.com",
        phone: "+996555555555"
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
        }
    }
})

// dispatch(userActions.setUser({ name: "Igor", phone: "+7 999 999 99 99", email: "3vY2F@example.com" }))
export const userReducer = userSlice.reducer