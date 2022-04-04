import React, { Component } from "react";
import ProductCard from "../../atoms/ProductCard";
import MainLayout from "../../templates/MainLayout/MainLayout";
import { ProductListWrapper } from "./productListStyle";
import { connect } from "react-redux";
import allActions from "../../store/Actions";
import opusClient from "../../Opus"
import { ALL_CATEGORY, CATEGORY_QUERY } from "../../Opus/queries";

class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: {},
      selected: null,
    };
  }


  async componentDidMount() {
    try {
      let allCategory = await opusClient.post(CATEGORY_QUERY(this.props.selectCategory))
  
      this.setState({category: allCategory.category})
      
    } catch (error) {
      console.log(error)
    }

  }

  async componentDidUpdate(prevProps) {
    try {
      if(prevProps !== this.props.selectCategory){

        let allCategory = await opusClient.post(CATEGORY_QUERY(this.props.selectCategory))

        this.setState({category: allCategory.category})
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  handleSelect = (id) => {
    this.state.category.products.map((product, index) => {
      if(id === product.productId) this.setState({selected: id})

      return product
    })
  }

  render() { 
    const products = this.state.category.products || []
    return (
      <MainLayout>
        <h1>{this.state.category.name}</h1>
        <ProductListWrapper>
          {products.map((product, index) => (
            <ProductCard 
              key={`prod-key-${product.id}`}
              product={product}
              productId={product.id}
              onSelect={() => this.handleSelect(product.id)}
              selectedId={this.state.selected}
              history={this.props.history}
            />
          ))}
        </ProductListWrapper>
      </MainLayout>
      
    );
  }
}
 
function mapStateToProps(state){
  const products = state.productCategory
  const selectCategory = state.selectCategory
  return{
    products,
    selectCategory
  }
}
export default connect(mapStateToProps)(ProductList);