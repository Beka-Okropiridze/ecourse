import { Routes, Route } from 'react-router-dom';
import { CartPage, HomePage, PageNotFound, ProductList } from '../pages';
import { OrderPage } from '../pages/Order/OrderPage';
import { ProductDetail, Register, Login, DashboardPage } from '../pages';
import { ProtectedRoutes } from './ProtectedRoutes';


export const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage title='eBook App' />} />
        <Route path='products' element={<ProductList title='All eBooks' />} />
        <Route path='products/:id' element={<ProductDetail title='About eBook' />} />

        <Route path='cart' element={<ProtectedRoutes> <CartPage title="Purchase" /> </ProtectedRoutes>} />
        <Route path='order-summary' element={<ProtectedRoutes> <OrderPage /> </ProtectedRoutes>}/>
        <Route path='dashboard' element={<ProtectedRoutes> <DashboardPage title="My Dashboard" /> </ProtectedRoutes>} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        <Route path='*' element={<PageNotFound title="Error Page" />} />
     </Routes>
    </>
  )
};
