// import React from "react";
// import ReactDOM from 'react-dom';
// import "./App.css";

// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = "";
// let cssStyle = {};

// if (curDate >= 1 && curDate<12){
//   greeting = "Good Morning";
//   cssStyle.color="green";
// }else if(curDate >=12 && curDate<19){
//   greeting = "Good Afternoon" ;
//   cssStyle.color="orange";
// }
// else{
//   greeting = "Good Night" ;
//   cssStyle.color = "black";
// }

// ReactDOM.render(
//   <>
//  <div>
//  <h1>Hello sir,  <span style={cssStyle}>{greeting}</span></h1>, 
//  </div>
//  </>,
//  document.getElementById("root")
// );


// Simple calculator app

// import React from 'react';
// import ReactDOM from "react-dom";
// import Add from "./Calc"

// ReactDOM.render(
//   <>
//   <ul>
//   <li>{Add(40,4)}</li>
//   </ul>
//   </>,
//   document.getElementById("root")
// ) ;

import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import App from "./App";

ReactDOM.render(
<>
  <div>
    <App />
  </div>
</>  ,
  document.getElementById("root")
);   
