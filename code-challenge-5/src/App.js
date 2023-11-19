import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';


function App() {
  const [bots,setbots]= useState ([])
    
  useEffect (()=> {
      fetch ("http://localhost:3000/bots")
      .then (response => response.json())
      .then (data => {
          setbots(data)})

  }, []);
  console.log(bots)

  
  return (
    <div className="App">
      <BotCollection/>
    
    </div>
  );
}

export default App;
