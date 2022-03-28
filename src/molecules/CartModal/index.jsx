import React, {Component} from "react";
import { ModalOverlay } from "./modalStyle";
import CartItem from "./cartItem";
import { GenerateId } from "../../utils/generateId";
import Button from "../../atoms/Button";
import EmptyCart from "./emptyCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import allActions from "../../store/Actions";

class CartModal extends Component {

  generatedId = new GenerateId()

  state = { 
   } 

  componentDidMount() {
    document.addEventListener('mousedown', this.clickOutside);
    this.props.dispatch(allActions.total())
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutside);
  }

  clickOutside = (e) =>{
    if(this.props.clickRef && !this.props.clickRef.current.contains(e.target)) this.props.setShowModal(false)
  }


  render() { 
    let cartItems = this.props.cartItem
    let totalAmount = this.props.totalAmount
    
    return ( 
      <ModalOverlay showModal={this.props.showModal} >
        <div className="modal" ref={this.props.clickRef}>

          <div className="dropdown-title-cont">
            <span className="dropdown-title">My Bag, </span>
            <span>{cartItems.length} items</span>
          </div>

          <div className="modal-cont">
            {cartItems.length > 0 
              ? cartItems.map((item, index) =>  (
                <CartItem 
                  key={`key-${item.productId}`}
                  item={item}
                  quantity={item.quantity}
                  dropdown={true}
                />
              ))
              : <EmptyCart />
            }
          </div>
          {cartItems.length > 0 && (
            <> 
              <div className="total-cont">
                  <span>Total</span>
                  <span>${totalAmount}</span>
              </div>
              <div className="btn-wrapper">
                <Link to='/cart'>
                  <Button text="VIEW BAG"/>
                </Link>
                <Button text="CHECK OUT" primary={true}/>
              </div>
            </>
          )}
        </div>
      </ModalOverlay>
     );
  }
}

function mapStateToProps(state) {
 const cartItem = state.updateCartItemQty
 const totalAmount = state.totalAmount

  return{
    cartItem,
    totalAmount
  }
   
}
export default connect(mapStateToProps)(CartModal);