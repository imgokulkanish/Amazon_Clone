import React from 'react'
import Header from '../../components/Header/Header'
import "./Checkout.css";
import SubTotal from '../../components/SubTotal/SubTotal';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../components/StateProvider/StateProvider'
const Checkout = () => {
    const [{ basket }] = useStateValue()
    return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                    />
                    {basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy or more items, click "Add
                                to basket" next to the item.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {basket.length > 0 && (
                    <div className="checkout__right">
                        <SubTotal />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout