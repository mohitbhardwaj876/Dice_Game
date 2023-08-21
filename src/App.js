import logo from './logo.svg';
import './App.css';
import Starter from './Components/Starter';
import styled from 'styled-components'
import { useState } from 'react';
import GamePlay from './Components/GamePlay';

function App() {
  const[isStarted,setIsStarted]=useState(false);
    function toggleGamePlay(){
      setIsStarted((prev)=>!prev);
    }
  return (
    <div className="App">
      { isStarted?<GamePlay/>:<Starter toggle={toggleGamePlay}/>
    }
    </div>
  );
}

export default App;
