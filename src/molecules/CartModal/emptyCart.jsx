import { Component } from "react";
import { EmptyCartWrapper } from "./modalStyle";

class EmptyCart extends Component {
  state = {  } 
  render() { 
    return (
      <EmptyCartWrapper>
        <span>No item added to cart</span>
      </EmptyCartWrapper>
    );
  }
}
 
export default EmptyCart;