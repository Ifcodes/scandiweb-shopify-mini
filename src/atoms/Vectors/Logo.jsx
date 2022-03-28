import React, {Component} from "react";

class Logo extends Component {
  render() { 
    return (
      <svg
      width={33}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M30.022 23.665a.543.543 0 0 1-.537.592H3.469a.543.543 0 0 1-.537-.59L4.796.912a.542.542 0 0 1 .538-.5h22.209c.28 0 .513.217.537.498l1.942 22.755Z"
          fill="#1DCF65"
        />
        <path
          d="M32.099 29.601a.679.679 0 0 1-.672.738H1.594a.678.678 0 0 1-.672-.735L3.064 2.347a.677.677 0 0 1 .672-.627h25.46c.35 0 .643.272.672.625l2.23 27.256Z"
          fill="url(#b)"
        />
        <path
          d="M15.923 21.695c-3.883 0-7.042-3.832-7.042-8.542 0-.245.197-.444.44-.444s.44.198.44.444c0 4.22 2.764 7.654 6.162 7.654s6.163-3.434 6.163-7.654c0-.245.197-.444.44-.444s.44.198.44.444c0 4.71-3.16 8.542-7.043 8.542Z"
          fill="#fff"
        />
        <path
          d="M20.258 13.034a.436.436 0 0 1-.31-.13.448.448 0 0 1 0-.629l2.278-2.302a.438.438 0 0 1 .622 0l2.257 2.28a.448.448 0 0 1 0 .628.437.437 0 0 1-.622 0l-1.946-1.966-1.968 1.989a.436.436 0 0 1-.31.13Z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={25.873}
          y1={26.334}
          x2={7.513}
          y2={4.901}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D67A" />
          <stop offset={1} stopColor="#5AEE87" />
        </linearGradient>
        <clipPath id="a">
          <path
            fill="#fff"
            transform="translate(.92 .412)"
            d="M0 0h31.16v30.176H0z"
          />
        </clipPath>
      </defs>
    </svg>
    );
  }
}
 
export default Logo;