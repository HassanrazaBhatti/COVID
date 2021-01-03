import React from 'react';
import { FirstName, LastName } from "../App"


function ComponentA() {

  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return(
                <h1> My name is {fname} {lname}</h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      <h1>This is ComponentA</h1>
    </div>
  )
}

export default ComponentA;