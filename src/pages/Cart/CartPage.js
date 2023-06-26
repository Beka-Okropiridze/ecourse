import { CartList } from "./cartcomponents/CartList";
import { CartEmpty } from "./cartcomponents/CartEmpty";
import { useCart } from "../../context";



export const CartPage = () => {
  
  const { cartList } = useCart();


    return (
      <main>       
        { cartList.length ? <CartList /> : <CartEmpty /> }   
      </main>
    )
  };
