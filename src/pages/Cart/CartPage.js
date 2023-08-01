import { CartList } from "./cartcomponents/CartList";
import { CartEmpty } from "./cartcomponents/CartEmpty";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";



export const CartPage = ({title}) => {
  
  useTitle(title)
  const { cartList } = useCart();


    return (
      <main>       
        { cartList.length ? <CartList /> : <CartEmpty /> }   
      </main>
    )
  };
