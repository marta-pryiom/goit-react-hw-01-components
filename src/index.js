import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const myBtn = React.createElement('button', { type:'button' }, 'Load more' )
// console.log(myBtn)
// let value= 'click me'
// const newBtn = <button type='button'>{value}</button>;
// console.log(newBtn)

// const fragm = (
//   <>
//   <img src='' alt=''/>
//   <h3>Head</h3>
//   </>
// )
// console.log(fragm)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

