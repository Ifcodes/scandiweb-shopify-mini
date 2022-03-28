import React, {Component} from "react";

class PlusIconsm extends Component {
  state = {  } 
  render() { 
    return (
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8v8M8 12h8"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path stroke="#1D1F22" d="M.5.5h23v23H.5z" />
      </svg>
      );
  }
}
 
export default PlusIconsm;