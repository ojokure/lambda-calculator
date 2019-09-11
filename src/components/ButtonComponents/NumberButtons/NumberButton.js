import React from "react";


 const NumberButton = (props) => {
  return (
    // <div className="layout1">
    <button className="numbers">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.numbers
      }
    </button>
    // </div>
  );
};

export default NumberButton;