import React from 'react';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => { dispatch(removeItem(cartItem)) }}>-</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>+</div>
            </span>
            <span className="price">${price}</span>
            <span className="price-quantity">${price * quantity}</span>
            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>Remove item</div>
        </div>
    )
}

export default CheckoutItem;