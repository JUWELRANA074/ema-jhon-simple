import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {

    // console.log(props);

    const { img, price, stock, name, seller, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="product">

            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="product-info">
                <h2 className="product-name" >{name}</h2>
                <p><small>By: {seller}</small></p>
                <h3>Price: {price}</h3>
                <p><small>Only {stock} left, order soon </small></p>

                <p>Rating:

                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star my-color"
                        fullSymbol="fas fa-star my-color"
                        readonly
                    >
                    </Rating>

                </p>

                <br />
                <button
                    onClick={() => props.hendelAddToCart(props.product)}
                    className="btn-regular"
                >
                    {cartIcon} add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;