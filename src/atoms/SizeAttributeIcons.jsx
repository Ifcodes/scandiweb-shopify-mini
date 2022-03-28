import { Component } from "react";
import styled from "styled-components";

const SizesWrapper = styled.div`
  width: ${props => 
      props.dropdown 
      ? '1.5rem'
      : '3.93rem'
    };
  
  height: ${props => 
    props.dropdown 
    ? '1.5rem'
    : '2.8125rem'
  };
  border: 1px solid ${props => props.theme.colors.textBlack};
  background-color: ${props => 
    props.selected && props.dropdown
    ? props.theme.colors.grey
    : props.selected 
    ? props.theme.colors.textBlack
    : 'white'
  };
  color: ${props => props.selected ? 'white' : 'black'};
  margin: 0 0.4rem 0 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  

`
class Sizes extends Component {
  state = {  
    selected: 0,
  } 

  render() { 
    return (
      <SizesWrapper 
        dropdown={this.props.dropdown}
        selected={this.props.selectedIndex === 
        this.props.selected }
        onClick={this.props.onSelect}
      >
        <span>
          {this.props.size}
        </span>
      </SizesWrapper>
    );
  }
}
 
export default Sizes;