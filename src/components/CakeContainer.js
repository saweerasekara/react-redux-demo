import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>No of Cakes : {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatetoProps, mapDispatchedToProps)(CakeContainer);
