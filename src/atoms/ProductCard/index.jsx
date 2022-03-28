import { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardWrapper } from "./productCardStyle";
import { connect } from "react-redux";
import allActions from "../../store/Actions";

class ProductCard extends Component {

  state = { 
  } 

  render() { 
    const showProductDesc = (id) => {
      return this.props.dispatch(allActions.showDescription(id))
    }
    return (
        <ProductCardWrapper
          isSelected={this.props.product.productId === this.props.selectedId}
          onClick={this.props.onSelect}
        >
          <img src={this.props.product.productImgUrl} alt="product" className="product-img"/>
          <div>
            <Link to={`/product-desc/${this.props.product.productId}`}>
              <span  onClick={() => showProductDesc(this.props.product.productId)}>
                {this.props.product.brandName} {this.props.product.otherName}
              </span>
            </Link>
            <span className="product-price-cont">
              {this.props.product.currency} 
              {this.props.product.price}
            </span>
          </div>
        </ProductCardWrapper>      
    );
  }
}
 
export default connect()(ProductCard);