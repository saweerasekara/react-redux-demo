import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button /*onClick={props.buyItem}*/> Buy Items</button>
    </div>
  );
};

const mapStatetoProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.cake
    ? dispatch(buyCake())
    : dispatch(buyIceCream());

  return {
    buyItem: dispatchFunc,
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ItemContainer);
