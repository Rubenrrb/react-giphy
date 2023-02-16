import React from 'react';
import ReactDOM from 'react-dom';

const Greet = (props) => {
  return <div>Hello, {props.name}</div>;
}

const raiz = document.getElementById('root');

if (raiz) {
  ReactDOM.render(<Greet name="Ruben" />, raiz);
}
