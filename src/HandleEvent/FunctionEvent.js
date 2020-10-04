import React from 'react';

export default function FunctionEvent() {
  const handleClick = () => {
    alert('Click me');
  };
  const handleClickParams = (message) => {
    alert(message);
  };
  return (
    <div>
      <h2>Function Event</h2>
      {/**xu ly su kien trong js thuan  khong ap dung cho reactjs*/}
      {/* <button onClick='handleClick()'> click me </button> */}
      {/**xu ly su kien trong reactjs */}
      <button onClick={handleClick}>click me reactjs</button>
      <button
        onClick={() => {
          handleClickParams('Hello');
        }}
      >
        click reactjs params
      </button>
    </div>
  );
}
