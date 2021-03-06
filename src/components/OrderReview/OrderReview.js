import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)

        removeFromDb(key);
    }

    const handelProceedToShipping = () => {
        history.push('/shipping');

        // clear cart when click order place button 
        // setCart([]);

        // clear data from local storage when click on place order 
        // clearTheCart();

    }

    return (
        <div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem
                            product={product}
                            key={product.key}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} >

                        <button
                            onClick={handelProceedToShipping}
                            className="btn-regular" >Proceed to Shipping</button>

                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default OrderReview;