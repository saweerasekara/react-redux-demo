import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>No of Cakes : {props.numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStatetoProps, mapDispatchedToProps)(NewCakeContainer);
