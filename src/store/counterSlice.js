import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 11,
        basket: [] // пример корзины
    },
    reducers: {
        // Immer - позволяет менять состояние напрямую
        increaseCounter: (state, action) => {
            state.value += 1
            // добавление товара в корзину
            // const productAlreadyInBasket = state.basket.find(item => item.id === action.payload.id)
            // if (!productAlreadyInBasket) {
            //     state.basket.push(action.payload)
            // }
            // удаление товара из корзины по ID товара
            // state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        decreaseCounter: (state, action) => {
            state.value -= 1
        }
    }
})

export const counterReducer = counterSlice.reducer
// export const { increaseCounter, decreaseCounter } = counterSlice.actions // dispatch(increaseCounter())
export const counterActions = counterSlice.actions // dispatch(counterActions.increaseCounter())