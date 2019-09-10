import React from "react";


const SpecialButton = (props) => {
  return (
    // <div className="layout1">
    <button className="specials">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.specials
      }
    </button>
    // </div>
  );
};

export default SpecialButton;