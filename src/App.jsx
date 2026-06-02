import { useState } from "react";
function App(){
  const[msg,setMsg]=useState(" ");
  const getmessage=async()=>{
    const response=await fetch("http://127.0.0.1:5000/api/message");
    const data=await(response.json());
    setMsg(data.message);
  }
  return(
    <div>
      <button onClick={getmessage}>click me</button>
      <p>{msg}</p>
    </div>
  )
}
export default App;