import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { increment } from "../../app/features/counter";
import store from "../../app/store";

function Counter() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.counter.value);

  const clickHandler = (_event) => {
    dispatch(increment());
  };

  return (
    <>
      <p>Current value: {value}</p>
      <input type="button" onClick={clickHandler} />
    </>
  );
}

function HelloWorld() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default HelloWorld;
