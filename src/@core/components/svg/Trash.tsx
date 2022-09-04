import * as React from 'react';

const TrashSvg = () => (
  <svg width={14} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.3 3.622a68.546 68.546 0 0 0-7.014-.364c-1.386 0-2.772.073-4.158.218L.7 3.622M4.55 2.887l.154-.952C4.816 1.244 4.9.727 6.083.727h1.834c1.183 0 1.274.546 1.379 1.215l.154.945M9.247 15.273H4.753c-1.953 0-2.016-.888-2.093-2.03L2.205 5.92M11.794 5.92l-.455 7.324" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default TrashSvg;
