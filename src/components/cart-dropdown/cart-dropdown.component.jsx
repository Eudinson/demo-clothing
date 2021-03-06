import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ history }) => {

    // const cartItem = useSelector(state => state)
    const cartItems = selectCartItems(useSelector(state => state))
    const dispatch = useDispatch();

    return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems.length ?
                            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                            :
                            <span className="empty-message">Your cart is empty</span>
                    }
                </div>
                <CustomButton
                    onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden())
                    }
                    }>GO TO CHECKOUT</CustomButton>
            </div>
    )
}

export default withRouter(CartDropdown);