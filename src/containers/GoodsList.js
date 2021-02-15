import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';
import Goods from '../components/Goods';
import { incriment } from '../store/cartSlice';

function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    const clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(incriment(t.getAttribute('data-key')));
    }

    return (
        <>
            <h1>GoodsList</h1>
            <div className="goods-field" onClick={clickHandler}>
                {goods.map(elem => <Goods key={elem.articul} title={elem.title} cost={elem.cost} image={elem.image}
                    articul={elem.articul} />
                )}
            </div>
        </>
    );
}
export default GoodsList;