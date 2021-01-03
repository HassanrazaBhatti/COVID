import React,{useState} from "react";
import "./App.css"

const Greeting = () =>{
    const [fullName,setFullName] = useState({
        fName : "",
        lName : "",
    });
   
    
    const inputEvent = (e)=>{
        console.log(e.target.value);
        
    }
    const onSubmits = (event)=>{
        event.preventDefault();
        alert("form submitted");
    }
return(
    <div>
        <form onSubmit={onSubmits}>
<h1>Hello {fullName.fName} {fullName.lName}</h1>
        
        <br />
        <input type="text"
         placeholder="Enter Your Name"
         onChange={inputEvent}
         name="fName" 
         value={fullName.fName} />
        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} name="lName" value={fullName.lName}/>
        
        <br />
        <button type="submit">Click Me</button>
        </form>
    </div>
)
}

export default Greeting;