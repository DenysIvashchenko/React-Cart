import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart
} from '../store/cartSlice';
import Cart from '../components/Cart'
import { minus, del } from '../store/cartSlice';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus')) {
            dispatch(minus(t.getAttribute('data-key')));
        }
        if (t.classList.contains('del')) {
            dispatch(del(t.getAttribute('data-key')));
        }
    }

    return (
        <div onClick={clickHandler}>
            <Cart data={goodsObj} cart={cart} />
        </div>
    );
}

export default CartList;