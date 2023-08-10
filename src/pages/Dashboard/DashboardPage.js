import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./dashboardcomponents/DashboardCard";
import { DashboardEmpty } from "./dashboardcomponents/DashboardEmpty";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";


export const DashboardPage = ({title}) => {

  useTitle(title)
  const [orders, setOrders] = useState([]);

  useEffect(() => { 
    async function fetchOrders() { 
      try { 
        const data = await getUserOrders()
        setOrders(data)
      } catch(err){
        toast.error(err.message)
      }
    }
    fetchOrders()
    console.log("orders",orders);
  }, []) //eslint-disable-line

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => ( 
          <DashboardCard key={order.id} order={order} />
        ))}
      </section>

      <section>
        {!orders.length && <DashboardEmpty />}
      </section>
    </main>
  )
};
