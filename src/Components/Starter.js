import styled from 'styled-components'
import {Button} from '../Styled/Button';
function Starter({toggle}){
    return(
        <Container>
            <div className='image'>
                <img src='\images\dice_png.png'/>
            </div>
            <div className='text'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Start Game</Button>
            </div>
        </Container>
    )
}
export default Starter;

const Container=styled.div`
width:90vw;
height:100vh;
margin: 0px auto;
display:flex;
align-items:center;

.image{
width:50%;  
text-align:center;  
img{
width:50%;
}
}
.text{
width:50%;
text-align:left;
h1{
font-size:96px;
line-height:10px;
}
}
`