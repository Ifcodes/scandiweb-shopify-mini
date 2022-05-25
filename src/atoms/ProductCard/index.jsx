import { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardWrapper } from "./productCardStyle";
import { connect } from "react-redux";
import allActions from "../../store/Actions";
import opusClient from "../../Opus"
import { PRODUCT_QUERY } from "../../Opus/queries";

class ProductCard extends Component {

  state = { 
  } 

   showProductDesc = async (id) => {
     const selectedProduct = await opusClient.post(PRODUCT_QUERY(id))
   

    return this.props.dispatch(allActions.showDescription(selectedProduct))
  }

  render() { 
    return (
        <ProductCardWrapper
          isSelected={this.props.product.id === this.props.selectedId}
          onClick={this.props.onSelect}
        >
          <img src={this.props.product.gallery[0]} alt="product" className="product-img"/>
          <div>
            <Link to={`/product-desc/${this.props.productId}`}>
              <span>
                {this.props.product.brand} {this.props.product.name}
              </span>
            </Link>
            {/* <span className="product-price-cont">
              {this.props.product.prices[0].currency.symbol} 
              {this.props.product.prices[0].amount}
            </span> */}
          </div>
        </ProductCardWrapper>      
    );
  }
}
 
export default connect()(ProductCard);