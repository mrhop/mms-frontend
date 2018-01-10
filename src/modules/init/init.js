import React from 'react';
import ReactDOM from 'react-dom';
import './init.scss';
/* eslint-disable */
// https://reactjs.org/docs/error-boundaries.html
function Example() {
  return (
    <select>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </select>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
