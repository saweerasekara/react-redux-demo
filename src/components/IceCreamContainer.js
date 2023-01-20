import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>No of Ice Cream : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchedToProps
)(IceCreamContainer);
