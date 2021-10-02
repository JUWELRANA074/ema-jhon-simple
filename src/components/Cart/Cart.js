import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // console.log(props.cart);

    const { cart } = props;

    let totalQuantity = 0

    let total = 0;
    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;

    const finalTotal = grandTotal

    return (
        <div>

            <h2>Order Summary</h2>
            {/* <h4>Items Ordered: {props.cart.length} </h4> <br /> */}

            <h4>Items Ordered: {totalQuantity} </h4> <br />

            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tex: {tax.toFixed(2)}</p>
            <p>Grend Total: {finalTotal.toFixed(2)} </p>

            {props.children}

        </div>
    );
};

export default Cart;