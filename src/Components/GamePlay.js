import { useState } from 'react';
import styled from 'styled-components';
import {Button,OutlineButton} from '../Styled/Button'
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from './RoleDice';
import Rules from './Rules';

function GamePlay(){
    const[error,setError]=useState(false);
    const[score,setScore]=useState(0);
    const[currentDice,setCurrentDice]=useState(1);
    const [selected,setSelected]=useState();
    const [showRules, setShowRules] = useState(false);

    function generateRandom(max,min){
        return Math.floor(Math.random()*(max-min)+min);
    }

    function roleDice(){
        if(!selected){
            setError(true);
            return;
        }
        const randomNum= generateRandom(1,7);
        setCurrentDice((prev)=> randomNum);
        if(selected==randomNum){
            setScore((prev)=>prev+randomNum);
        }
        if(selected!=randomNum){
            setScore((prev)=>prev-2);
        }
        setSelected(undefined);
    }
    
    function reset(){
        setError(false);
        setScore(0);
        setCurrentDice(1);

    }
    return(
        <MainConatiner>
            <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <ButtonConatiner>
            <OutlineButton onClick={reset}>Reset</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
            </ButtonConatiner>
            {showRules && <Rules/>}
        </MainConatiner>
    )
}
export default GamePlay;

const MainConatiner=styled.div`
padding-top:70px;
width:90vw;
margin:0 auto;
.top_section{
display:flex;
justify-content:space-between;
align-items:center;
}
`
const ButtonConatiner=styled.div`
display:flex;
flex-direction:column;
gap:10px;
align-items:center;
justify-content:center;
 `