import styled from 'styled-components';

function RoleDice({currentDice,roleDice,reset,showRules,setShowRules}){
    return(
        <DiceContainer>
            <div className="dice">
      <img  onClick={roleDice} src={`/images/dice_${currentDice}.png`} alt='dice_1' />
            </div>
            <p>Click On Dice</p>
        </DiceContainer>
    )
}
export default RoleDice;

const DiceContainer=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
img{
    cursor:pointer;
}
p{
    font-size: 24px;
    font-weight:700;
}

`