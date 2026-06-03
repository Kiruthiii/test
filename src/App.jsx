import { useState } from "react";
function App(){
  const[msg,setMsg]=useState(" ");
  const[age,setAge]=useState(0);
  const[result,setResult]=useState(" ");
  const getmessage=async()=>{
    const response=await fetch("https://test-gi4q.onrender.com/api/message");
    const data=await(response.json());
    setMsg(data.message);
  }
  const sendinfo=async()=>{
    const response=await fetch(
      "https://test-gi4q.onrender.com/api/voter",
      {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
       body: JSON.stringify({
        age: age
      })
    }


     
)
const data=await response.json();
setResult(data.result)
  }
  return(
    <div>
      <input value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={sendinfo}>checkVoting</button>
      <p>{result}</p>
      <button onClick={getmessage}>click me</button>
      <p>{msg}</p>
    </div>
  )
}
export default App;