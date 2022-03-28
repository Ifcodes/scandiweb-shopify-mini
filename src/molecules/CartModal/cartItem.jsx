import React, { Component } from "react";
import Sizes from "../../atoms/SizeAttributeIcons";
import MinusIcon from "../../atoms/Vectors/MinusIcon";
import MinusIconsm from "../../atoms/Vectors/MinusIconsm";
import PlusIcon from "../../atoms/Vectors/PlusIcon";
import { CartItemWrapper } from "./modalStyle";
import PlusIconsm from "../../atoms/Vectors/PlusIconsm";
import allActions from "../../store/Actions";
import { connect } from "react-redux";

class CartItem extends Component {

  state = { 
    activeOption: 0,
    
  }

  handleSelect = (indx) => {
    this.props.selectedOptions.map((size, index) => {
      if(indx === index) this.setState({selected: indx})

      return size
    })
  }

  

  render() { 

    const handleAdd = (id) => {
      this.props.dispatch(allActions.increment((id)))
      this.props.dispatch(allActions.total())
    }
  
    const handleMinus = (id) => {
      if(this.props.item.quantity >= 1){
        this.props.dispatch(allActions.minus((id)))
        this.props.dispatch(allActions.total())
      }
    }

    return (
      <CartItemWrapper 
        dropdown={this.props.dropdown}
      >
        <div className="product-desc-cont">
          <div className="product-name">
            <span className="brand-name">
              {this.props.item.brandName}
            </span> 
            <span className="other-name">
              {this.props.item.otherName}
            </span> 
          </div>
          
          <p className="price">
            {this.props.item.currency}
            {this.props.item.price} 
          </p>
          <div className="size-cont">
            {this.props.item.selectedOptions && (this.props.item.selectedOptions.map((size, index) => (
              <Sizes 
                key={`key-${index}`}
                dropdown={this.props.dropdown}
                size={size}
                selectedIndex={index}
                selected={this.state.selected}
                onSelect={() => this.handleSelect(index)}
              />
            )))}
          </div>
        </div>
        <div className="img-cont">
          <div className="qty-cont">
            <div 
              onClick={() => handleAdd(this.props.item.productId)}
              className="qty-btn"
            >
              { this.props.dropdown
                ? <PlusIconsm />
                : <PlusIcon />
              }
            </div>
            <span className="qty">{this.props.quantity}</span>
            <div 
              onClick={() => handleMinus(this.props.item.productId)}
              className="qty-btn"
            >
              { this.props.dropdown
                ? <MinusIconsm />
                : <MinusIcon />
              }
            </div>
          </div> 
          <img src={this.props.item.productImgUrl} alt="prodImg" className="product-img"/>
        </div>
      </CartItemWrapper>
    );
  }
}
 
export default connect()(CartItem);