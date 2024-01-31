import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 11
    },
    reducers: {
        // Immer - позволяет менять состояние напрямую
        increaseCounter: (state, action) => {
            state.value += 1
        },
        decreaseCounter: (state, action) => {
            state.value -= 1
        }
    }
})

export const counterReducer = counterSlice.reducer
// export const { increaseCounter, decreaseCounter } = counterSlice.actions // dispatch(increaseCounter())
export const counterActions = counterSlice.actions // dispatch(counterActions.increaseCounter())