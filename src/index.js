import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Timefun from './Timefun';
//import './Time.css';
//import './index.css'
import "./Todo.css";
import Bgchange from './Bgchange';
import Form from './Form';
import Todo from './Todo';
import Toggel from './Accordion/Toggel';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    {/* <Counter/> */}
    {/* <Timefun/> */}
  {/* <Bgchange/> */}
  {/* <Form/> */}
  <Todo/>
  {/* <Toggel/>
  <Question/> */}
  </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
