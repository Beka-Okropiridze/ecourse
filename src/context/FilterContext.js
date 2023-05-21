import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";



const FilterInitialState = { 
    productlist: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    rating: null
};


const FilterContext = createContext(FilterInitialState)

export const FilterProvider = ({children}) => { 

    const [state, dispatch] = useReducer(filterReducer, FilterInitialState);

    const initialProductList = (products) => { 
        dispatch({ 
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    const value = { 
        products: state.productlist,
        initialProductList,
    }

    return (
            <FilterContext.Provider value={value}>
                    {children}
            </FilterContext.Provider>
           )
}

export const useFilter = () => { 
    const context = useContext(FilterContext)
    return context
};