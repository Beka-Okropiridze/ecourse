import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductList } from '../pages';
import { ProductDetail } from '../pages';
import { Register } from '../pages';
import { Login } from '../pages';

export const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage title='eBook App' />} />
        <Route path='products' element={<ProductList title='All eBooks' />} />
        <Route path='products/:id' element={<ProductDetail title='About eBook' />} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
     </Routes>
    </>
  )
}
