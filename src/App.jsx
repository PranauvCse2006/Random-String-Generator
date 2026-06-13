import { useState } from "react";
import "./App.css";
function App() {
  const [length , setLength]= useState(8);
  const [randomString , setRandomString]= useState("");

  function generateRandomString(){
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    let result="";
    for(let i=0;i<Number(length);i++){
      const index=Math.floor(Math.random()*characters.length);
      result+=characters[index];

    }

    setRandomString(result);
    
  }
   


  return (
    <div>
    <div>
    <h1 className="text-5xl font-bold text-center mt-10">
      Random String Genrator
    </h1>
    </div>

    <div>
    
    <label>Enter the length of the string</label>


    <input type="number" placeholder= "Enter length "  className="flex-1 p-3 rounded" value={length} onChange={(e)=>setLength(e.target.value)}                   /><br/>


    <label>Generated string will appear here</label>  
    <input type="text" placeholder= "Random String" className="w-full p-3 rounded mb-4" value={randomString} readOnly /><br/>


    <button className="bg-blue-500 px-4 py-3 rounded text-white" onClick={generateRandomString}>GENERATE</button>
    </div>
    </div>
  );
}

export default App;