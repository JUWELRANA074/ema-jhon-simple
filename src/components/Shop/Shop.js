import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    // for search result 
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        // fetch('./products.json')
        //     .then(res => res.json())
        //     .then(data => setProducts(data))

        console.log('product api called');
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log('products recived');
                setDisplayProducts(data)
            })

    }, []);

    useEffect(() => {
        console.log('local storage called');
        if (products.length) {

            const saveCart = getStoredCart();
            const storedCard = [];

            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(quantity);
                    storedCard.push(addedProduct)
                }
            }
            setCart(storedCard)
        }
    }, [products])

    const hendelAddToCart = (product) => {
        // console.log(product);
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];

        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart)
        // save to local storage from now 
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);

        console.log(matchedProducts.length);

    }

    return (

        <>

            <div className="search-container">

                <input
                    onChange={handleSearch}
                    placeholder="Search Product"
                    type="text" />

            </div>

            <div className="shop-container">

                <div className="product-container">

                    {/* <h2>Product: {products.length} </h2> */}

                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            hendelAddToCart={hendelAddToCart}
                        >

                        </Product>)
                    }

                </div>

                <div className="cart-container">

                    <Cart
                        cart={cart}>

                        <Link to="/review">
                            <button className="btn-regular" >Review Your Order</button>
                        </Link>

                    </Cart>

                </div>

            </div>

        </>
    );
};

export default Shop;