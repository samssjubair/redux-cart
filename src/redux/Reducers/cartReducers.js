import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState={
    cart: [],
    products: [{
        name: 'Asus laptop',
        id: 1
    },
    {
        name: 'Dell laptop',
        id: 2
    },
    {
        name: 'Apple laptop',
        id: 3
    },
    {
        name: 'Toshiba laptop',
        id: 4
    },
    {
        name: 'Lenevo laptop',
        id: 5
    },
    {
        name: 'Acer laptop',
        id: 6
    }]
}


const cartReducers=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newItem={
                productId: action.id,
                name: action.name,
                cartId: state.cart.length+1
            }
            const newCart=[...state.cart,newItem];
            return {...state, cart: newCart}
        case REMOVE_FROM_CART:
            const id=action.id;
            const remainingCart=state.cart.filter(cart=> cart.cartId !== id )
            return {...state,cart: remainingCart}
        default:
            return state;
    }
}

export default cartReducers;