import React, { useContext } from 'react';
import {FirstName} from "../App"

function ComponentB() {
  const fname = useContext(FirstName) ;
  return (
    <div>
    <h1>My name from B component is {fname}</h1>
</div>
  )
}

export default ComponentB;