import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initialCartState = {
    cartList: [],
    total: 0,
};

const CartContext = createContext(initialCartState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer( cartReducer, initialCartState );

    function addToCart(product){ 
        const updatedCartList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        dispatch({ 
            type: "ADD_TO_CART",
            payload: {
                cartList: updatedCartList,
                total: updatedTotal
            }
        })
    };

    function removeFromCart(product) { 
        const updatedCartList = state.cartList.filter(pro => pro.id !== product.id);
        const updatedTotal = state.total - product.price;
        dispatch({ 
            type: "REMOVE_FROM_CART",
            payload: { 
                cartList: updatedCartList,
                total: updatedTotal
            }
        })
    };

    function clearCart(product) { 
        dispatch({ 
            type: "CLEAR_CART",
            payload: { 
                cartList: [],
                total: 0
            }
        })
    };


    const value = { 
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    };

    return <CartContext.Provider value={value}>
                {children}
           </CartContext.Provider>
};

export const useCart = () => { 
    const cart = useContext(CartContext);
    return cart
};
