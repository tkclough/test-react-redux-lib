'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var initialState = {
  value: 0
};
var counterSlice = toolkit.createSlice({
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

var store = toolkit.configureStore({
  reducer: {
    counter: counterReducer
  }
});

function Counter() {
  var dispatch = reactRedux.useDispatch();
  var value = reactRedux.useSelector(function (state) {
    return state.counter.value;
  });

  var clickHandler = function clickHandler(_event) {
    dispatch(increment());
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("p", null, "Current value: ", value), /*#__PURE__*/React__default["default"].createElement("input", {
    type: "button",
    onClick: clickHandler
  }));
}

function HelloWorld() {
  return /*#__PURE__*/React__default["default"].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default["default"].createElement(Counter, null));
}

exports.HelloWorld = HelloWorld;
