import { Component } from "react";
import { DropdownWrapper } from "./dropdownsStyles";

class Dropdown extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.clickAway);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickAway);
  }

  clickAway = (e) => {
    if(this.props.clickedRef && !this.props.clickedRef.current.contains(e.target)) this.props.setShowCurrency(false)
  }

  render() { 
    return (
      <DropdownWrapper showDropdown={this.props.showDropdown} ref={this.props.clickedRef}>
        {this.props.currencySymbols.map((c, index) => (
          <span 
            key={`key-${index}`}
            onClick={() => this.props.onSelect(c)}
          >
            {c} {this.props.currencyInitial[index]}
          </span>
        ))}
      </DropdownWrapper>
    );
  }
}
 
export default Dropdown;