import {Component} from 'react'
import { Routes, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import ParamsWrap from './utils/routeHelper';
import ProductList from './pages/ProductListPage';


class App extends Component {

  render() { 
    // const ParamsWrap = (props) => {
    //   const params = useParams()
    //   return(
    //     <ProductDescription  {...{...props, match: {params}} }/>
    //   )
    // }
    return ( 
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product-desc/:id' element={<ParamsWrap />} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
     );
  }
}
 
export default App;