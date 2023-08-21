import styled from "styled-components";

function NumberSelector({selected,setSelected,error,setError}){
    const array=[1,2,3,4,5]
    function numberSelectorHandler(value){
        setSelected(value)
        setError(false);
     
    }
    return(
        <NumberSelectorContainer>
        {error?<p1>Please select a number</p1>:null}
            
            <div className="flex">
            {
                array.map((item,index)=>
                    <Box key={index} onClick={()=>numberSelectorHandler(item)} isSelected={item===selected}>{item}</Box>
                )
            }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
};
export default NumberSelector;

const NumberSelectorContainer=styled.div`
.flex{
    display:flex;
    gap:24px;
}
p{
    margin:10px 0px;
    font-weight:700;
}
p1{
    text-align:right;
    color:red;
    font-size:15px;
    font-weight:700;
}
`
const Box=styled.div`
height:72px;
width:72px;
margin-top:20px;
font-weight:700;
border:1px solid black;
display:grid;
place-items:center;
background-color:${(props)=>(props.isSelected?"black":"white")} ;
color:${(props)=>(props.isSelected?"white":"black")};
`