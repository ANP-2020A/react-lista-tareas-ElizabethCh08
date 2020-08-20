import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const users = [
//     {
//         firtsName: 'Chalo',
//         lastName: 'Salvador'
//     },
//     {
//         firtsName: 'Chalo1',
//         lastName: 'Salvador1'
//     },
//     {
//         firtsName: 'Chalo2',
//         lastName: 'Salvador2'
//     }
// ];
const users = [
    {
        firstName: 'Chalo',
        lastName: 'Salvador'
    },
    {
        firstName: 'Elizabeth',
        lastName: 'Chinacalle'
    },
    {
        firstName: 'Analy',
        lastName: 'Chinacalle'
    }
];
ReactDOM.render(
  <React.StrictMode>
      <App users = {users}/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
