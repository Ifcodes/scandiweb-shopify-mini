import { Component } from "react";
import CartItem from "../../molecules/CartModal/cartItem";
import EmptyCart from "../../molecules/CartModal/emptyCart";
import { CartWrapper } from "./cartPageStyles";
import MainLayout from "../../templates/MainLayout/MainLayout";
import Button from "../../atoms/Button";
import { connect } from "react-redux";

class CartPage extends Component {

  render() { 
    let cartItems = this.props.cartItem

    return (
      <MainLayout>
        <CartWrapper>
          <h1>CART</h1>
          <div>
            {cartItems.length > 0 
              ? cartItems.map((item, index) =>  (
                <CartItem 
                  key={`key-${item.productId}`}
                  item={item}
                  selectedOptions={item.selectedOptions}
                  dropdown={false}
                  quantity={item.quantity}
                />
                ))
              : <EmptyCart />
            }
          </div>
          {cartItems.length > 0 && (
            <> 
              <div className="total-cont">
                  <span>Total:</span>
                  <span>${this.props.totalAmount}</span>
              </div>
              <div className="btn-wrapper">
                <Button 
                  text="CHECK OUT" 
                  primary={true}
                  width={'50%'}
                />
              </div>
            </>
          )}
        </CartWrapper>
      </MainLayout>
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

export default connect(mapStateToProps)(CartPage);