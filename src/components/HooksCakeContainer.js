import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <p>with hooks</p>
      <h1>No of Cakes - {numOfCake} </h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
