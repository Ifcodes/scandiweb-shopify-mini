import React, {Component} from "react";

class ArrowDown extends Component {
  state = {  } 
  render() { 
    return (
      <svg
        width={8}
        height={4}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1 .5 3 3 3-3"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
 
export default ArrowDown;