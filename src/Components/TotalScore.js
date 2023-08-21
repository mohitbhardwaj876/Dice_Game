import styled from 'styled-components'
function TotalScore({score}){
    return(
        <ScoreContainer>
        <h1>{score}</h1>
        <p>score</p>           
        </ScoreContainer>
    )
};
export default TotalScore;

const ScoreContainer=styled.div`
 max-width: 200px;
 text-align: center;
    h1{
        font-size:60px;
        line-height:0px;
    }
    p{
        font-size:24px;
        line-height:0px;
        font-weight:600px;
    }
`