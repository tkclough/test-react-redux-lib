import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

var initialState = {
  value: 0
};
var counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function increment(state) {
      state.value++;
    }
  }
});
var increment = counterSlice.actions.increment;
var counterReducer = counterSlice.reducer;

var store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

function Counter() {
  var dispatch = useDispatch();
  var value = useSelector(function (state) {
    return state.counter.value;
  });

  var clickHandler = function clickHandler(_event) {
    dispatch(increment());
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Current value: ", value), /*#__PURE__*/React.createElement("input", {
    type: "button",
    onClick: clickHandler
  }));
}

function HelloWorld() {
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Counter, null));
}

export { HelloWorld };
