import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        incriment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minus: (state, data) => {
            let articul = data.payload;
            let current = state.value[articul];
            if (current - 1 > 0) {
                state.value[articul] = current - 1;
                return state;
            }
            else {
                delete state.value[articul];
                return state;
            }
        },
        del: (state, data) => {
            let articul = data.payload;
            delete state.value[articul];
            return state;
        }

    }
});

export const { incriment, minus, del } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;