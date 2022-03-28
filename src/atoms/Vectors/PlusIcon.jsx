import React, {Component} from "react";

class PlusIcon extends Component {
  state = {  } 
  render() { 
    return (
      <svg
        width={this.props.width || 45}
        height={this.props.height || 45}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 15v15M15 22.5h15"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path stroke="#1D1F22" d="M.5.5h44v44H.5z" />
      </svg>
      );
  }
}
 
export default PlusIcon;