import { ButtonWrapper } from "./buttonStyle";
import { Component } from "react";

class Button extends Component {
  render() { 
    return (
      <ButtonWrapper 
        primary={this.props.primary}
        width={this.props.width}
      >
        {this.props.text}
      </ButtonWrapper>
    );
  }
}
 
export default Button;