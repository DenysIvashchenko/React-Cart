function Cart(props) {
    let sum = 0;
    Object.keys(props.cart).map(item => sum += props.data[item]['cost'] * props.cart[item]);

    return (
        <div className="cart-field">
            <h1>Cart</h1>
            <table>
                <tbody>
                    <tr><th>Pictures</th><th>Name</th><th>Cost</th><th>Count</th><th>Amount</th><th>Minus</th><th>Del</th></tr>
                    {Object.keys(props.cart).map(item => (
                        <tr key={item + props.data[item]['title']}>
                            <td> <img src={props.data[item]['image']} alt="img" />{props.cart[item]['image']}</td>
                            <td>{props.data[item]['title']}</td>
                            <td>{props.data[item]['cost']}</td>
                            <td>{props.cart[item]}</td>
                            <td>{props.data[item]['cost'] * props.cart[item]}</td>
                            <td><button className="minus" data-key={props.data[item]['articul']}>-</button></td>
                            <td><button className="del" data-key={props.data[item]['articul']}>Del</button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5"></td>
                        <td>Total Amaunt :</td>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Cart;