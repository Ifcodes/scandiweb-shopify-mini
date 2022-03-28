import {Component} from 'react'
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductDescription from './pages/ProductDescriptionPage';
import ProductList from './pages/ProductListPage';


class App extends Component {

  render() { 
    return ( 
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product-desc/:id' element={<ProductDescription />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
     );
  }
}
 
export default App;