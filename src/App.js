
import Button from "./ui/Button";
import React, { useState } from 'react';



function App() {


   const [toggle , setToggle]= useState(false)
     function toggleHandler(){
      setToggle(prev=>!prev)
     }
  return (
    <div >
      {toggle&& "hello"}<Button style={{padding :"12px  8px" , color: "blue", fontSize: "20px" ,backgroundColor:" #04AA6D"}}>close</Button>
     <Button  style={{padding :"12px  8px" , color: "blue", fontSize: "20px" , backgroundColor:" #f44336"}}>delete</Button>
     
     <Button style={{padding :"12px  8px" , color: "blue", fontSize: "20px" ,backgroundColor:" #e7e7e7"}} onClick={toggleHandler} >open </Button>

      
    
    </div>
  );
}

export default App;
