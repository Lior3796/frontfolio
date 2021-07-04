import React,{useState,useEffect} from 'react';
import Form from '../../Featuers/Form/Form';
import styled from 'styled-components';
import Button from '../../Featuers/Button/Button';
function ContactMe() {
    const [check,setCheck] = useState(true);
    const [space,setSpace] = useState("auto");
    const [visiable,setVisiable] = useState("none");

    
  const [changeWidth,setChangeWidth] = useState(false);
  
  const updateWidth = () => {
    const changeWidth = window.innerWidth;
    setChangeWidth(changeWidth)
  }

  useEffect(() => { 

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => 
      window.removeEventListener("resize",updateWidth);
   }, []);

    const StyledDiv = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: center;
     flex-direction: ${changeWidth > 600 ? "row" : "column"}
     height:100%;
     width:80%;
     margin:auto;
     background:transparent ;
     height:100vh;
     position:relative;
  
    `;

    const StyleH1 = styled.h1`
    width: 100%;
    font-size: 4rem;
    z-index: 100;
   `;

    function changePosition() {
        if(check)
        {
            setSpace("400px");
            setVisiable("block");
        }
        else{
            setSpace("0px");
            setVisiable("none");
        }
        setCheck(!check);
        
     }
    return (
        <div>
            <StyleH1>Contact Me</StyleH1>
        <StyledDiv>
        <Button top="40%" left={changeWidth > 779 ?"-60%" : "5%"} func={()=> changePosition()} text="Form" />
        {
        
        changeWidth > 779 ? <Button top="40%" left="60%"  func={()=> changePosition()} text="FBack" />
        : <></>
        }
        </StyledDiv>
        </div>
    );
}

export default ContactMe;