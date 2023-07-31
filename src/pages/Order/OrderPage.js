import { OrderSuccess } from './ordercomponents/OrderSuccess';
import { OrderFail } from './ordercomponents/OrderFail';
import { useLocation } from 'react-router-dom';



export const OrderPage = () => {

    const { state } = useLocation();
    // console.log(state.status);

  return (
    <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
};
