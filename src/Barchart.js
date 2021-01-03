// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'My First dataset',
//             backgroundColor: 'blue',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'red',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: [35, 95, 10, -18, 56, 35, 99]
//         },
//         {
//             label: 'My Last dataset',
//             backgroundColor: 'rgba(255,99,132,0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: [65, 59, 80, 81, 56, 55, 40]
//         }
//     ]
// };

// function Barchart() {
//     return (
//         <div>
//             <h2>Bar Example (custom size)</h2>
//             <Bar
//                 data={data}
//                 width={100}
//                 height={250}
//                 options={{
//                     maintainAspectRatio: false
//                 }}
//             />
//         </div>
//     );
// }

// export default Barchart;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Barchart() {
    <>
  var NewComponent = React.createClass({'{'}
  render: function() {'{'}
  return (
  <div>
    &lt;<nav classname="navbar navbar-expand-lg navbar-light bg-light">
      <a classname="navbar-brand" href="#">Navbar</a>
      <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon">
        </span></button>
      <div classname="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classname="navbar-nav mr-auto">
          <li classname="nav-item active">
            <a classname="nav-link" href="#">Home <span classname="sr-only">(current)</span></a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#">Link</a>
          </li>
          <li classname="nav-item dropdown">
            <a classname="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div classname="dropdown-menu" aria-labelledby="navbarDropdown">
              <a classname="dropdown-item" href="#">Action</a>
              <a classname="dropdown-item" href="#">Another action</a>
              <div classname="dropdown-divider">
                <a classname="dropdown-item" href="#">Something else here</a>
              </div>
            </div></li>
          <li classname="nav-item">
            <a classname="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form classname="form-inline my-2 my-lg-0">
          <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  );
  {'}'}
  {'}'});
</>
}
export default Barchart;