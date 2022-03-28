import React, { Component } from "react";
import ProductCard from "../../atoms/ProductCard";
import MainLayout from "../../templates/MainLayout/MainLayout";
import { GenerateId } from "../../utils/generateId";
import { ProductListWrapper } from "./productListStyle";
import { connect } from "react-redux";
import allActions from "../../store/Actions";

class ProductList extends Component {
  generatedId = new GenerateId()

  state = { 
    selected: null,
   } 

  // componentDidMount(){
  //   this.props.dispatch(allActions.womenCategory())
  // }

  render() { 
    const products = this.props.products
    console.log("products:", products)
    const handleSelect = (id) => {
      products.map((product, index) => {
        if(id === product.productId) this.setState({selected: id})
  
        return product
      })
    }
    return (
      <MainLayout>
        <h1>Category Name</h1>
        <ProductListWrapper>
          {products.map((product, index) => (
            <ProductCard 
              key={`key-${product.productId}`}
              product={product}
              productId={product.productId}
              onSelect={() => handleSelect(product.productId)}
              selectedId={this.state.selected}
            />
          ))}
        </ProductListWrapper>
      </MainLayout>
      
    );
  }
}
 
function mapStateToProps(state){
  const products = state.productCategory
  return{
    products
  }
}
export default connect(mapStateToProps)(ProductList);