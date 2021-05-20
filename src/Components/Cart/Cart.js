import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/cartActions';

const Cart = (props) => {
    
    const {cart,removeFromCart}=props;
    
    return (
        <div>
            <h1>cart item: {cart.length}</h1>
            
            <ul>
                {
                    cart.map(item=> <li>{item.name} <button onClick={()=>removeFromCart(item.cartId)}>x</button> </li> )
                }
            </ul>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        cart: state.cart
    }
}
const mapDispatchToProps={
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);