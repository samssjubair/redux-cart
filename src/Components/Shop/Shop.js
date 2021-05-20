import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Actions/cartActions';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = (props) => {
    console.log(props);
    const {products,addToCart}=props;
    
    
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd=> <Product addToCart={addToCart} product={pd}></Product> )
            }
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps={
    addToCart: addToCart
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop);