import React, {Component, createRef} from "react";
import CartModal from "../../molecules/CartModal";
import Nav from "../../molecules/Nav";
import { LayoutWrapper } from "./layoutStyles";
import { GenerateId } from "../../utils/generateId";
import { connect } from "react-redux";

class MainLayout extends Component {
  generatedId = new GenerateId()

  constructor(){
    super()
    this.clickedRef = createRef()
  }

  state = {
    tabs: ["WOMEN", "MEN", "KIDS"],
    showModal: false,
  }


  setShowModal = (val) => {
    this.setState({showModal: val})
  }


  render() { 
    const cartItems = this.props.cartItems
    return (
      <LayoutWrapper>
        <Nav 
          clickRef={this.clickedRef}
          showModal={() => this.setShowModal(!this.state.showModal)}
          totalCartItem={cartItems}
        />
        <CartModal 
          showModal={this.state.showModal}
          clickRef={this.clickedRef} 
          setShowModal={this.setShowModal}
        />
        <main>
          {this.props.children}
        </main>
      </LayoutWrapper>
    );
  }
}
 
function mapStateToProps(state) {
  const cartItems = state.updateCartItemQty
  return{
    cartItems,
  }
}

export default connect(mapStateToProps)(MainLayout);