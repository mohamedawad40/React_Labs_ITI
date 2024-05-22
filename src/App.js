import './App.css';
import { ProductTable } from './component/ProductTable';
import { SharedLayout } from './layouts/SharedLayout';
// import {NavScroll} from './component/Navbar'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { ProductForm } from './pages/ProductForm';
import {About} from './pages/about';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Error} from './layouts/Error'
import { getAllBooks } from './api/bookApi';


function App() {
      const router= createBrowserRouter(createRoutesFromElements(
      <>
        <Route path='/' element={<SharedLayout/>}>
        <Route index loader={getAllBooks} element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='books' 
         loader={getAllBooks}  errorElement={<Error/>} element={<ProductTable/>}/>
        <Route path='books/:id' errorElement={<Error/>} element={<ProductDetails/>}/>
        <Route path='books/:id/edit' element={<ProductForm/>}/>
        {/* <Route path='books/add' element={<ProductForm/>}/> */}
        
      </Route>
      <Route path='*' element={<NotFound/>}/>
      </>
      )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
