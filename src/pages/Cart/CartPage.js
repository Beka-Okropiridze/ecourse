import { CartList } from "./cartcomponents/CartList";
import { CartEmpty } from "./cartcomponents/CartEmpty";



export const CartPage = () => {
  
  const cartListlength = 2;

    return (
      <main>       
        { cartListlength ? <CartList /> : <CartEmpty /> }   
      </main>
    )
  }
