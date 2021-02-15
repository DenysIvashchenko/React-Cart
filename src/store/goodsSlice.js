import { createSlice } from "@reduxjs/toolkit";
import goodsArr from '../data/goods.json';


export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        value: goodsArr,
    },
    // reducers: {

    // }
});

// export const { } = goodsSlice.actions;
export const selectGoods = state => state.goods.value;
export default goodsSlice.reducer;