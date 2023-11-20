import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './pages/BotCollection';
import { Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Components/Nav';
import BotArmy from './pages/BotArmy';



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
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/botcollection' element={ <BotCollection lists = {bots}/>}></Route>
      <Route path="/botarmy/:id" element={<BotArmy />} />
      </Routes>
      
      
      
     
    
    </div>
  );
}

export default App;
