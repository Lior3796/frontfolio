import React,{useEffect, useMemo, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';
import './Form.css';
import { useRef } from 'react';
function Form({display,addTextBox}) {

 const [direction,setDirection] = useState("left");
 const fName = useRef("");
 const lName = useRef("");
 const age = useRef("");
 const email = useRef("");
 const phoneNumber = useRef("");
 const textBox = useRef("");
 
 const [userDetails,setUserDetails] = useState();

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

 const inputAnimation = keyframes`
  0%{
    opacity:0;
    
  }
  100%{
      opacity:1;
     

  }
  `;
  const StyledLabel = styled.label`
  font-size:1.4rem;
  color:white;
 `;
  const StyledFormAnimate = keyframes` 
  %0{
    opacity:0;
  }
  %100{
    opacity:1;
  }
  `;
  
  const StyleForm = styled.form`
  margin:auto;
  animation:${StyledFormAnimate} 2s 0 ease-in;
  width:${changeWidth > 827 ? "60%" : "100%"};
  height:${changeWidth > 827 ? "90%" : "100%"};
  border:1px solid yellow;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-flow:column;
  color:white;
  border-radius:10px;
  z-index:1000;
  `;
  const responsiveForm = {
    margin:"auto",
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexFlow:"column",
    color:"white",
    borderRadius:"10px",
    zIndex:1000
  }

  let StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    padding:8px 20px;
    border-radius: 4px;
    border:1px solid yellow;
    transition: all 0.3s ease-out;
    font-size:20px;
    margin:auto;
    pointer-events: all;
    z-index: 1000;
    &:hover{
    padding: 8px 20px;
    transition: all 0.3s ease-out;
    background-color: #fff;
    color:#6568f4;
    transition: all 250ms;
    }`;
    const TextBox = styled.textarea`
    width:100%;
    height:100%;
    `
    
 console.log(fName);
  return (
    <>
    <StyleForm method="post" action={`mailto:${email.current.value}?&subject=Big%20News&body=
  Hello${fName.current.value}${lName.current.value}: I'm very happy for click.
   you are ${age.current.value} and your phone number is: ${phoneNumber.current.value}
   hope to meet you,
   Lior.
  .`}>
      
      <StyledLabel htmlFor="">first name:</StyledLabel>
      <input style={{textAlign:"center"}} ref={fName} name="fName" className="StyledInput" type="text"></input>
      
      <StyledLabel htmlFor="">last-Name:</StyledLabel>
      <input style={{textAlign:"center"}} ref={lName} name="lName" className="StyledInput" type="text" />
      
      <StyledLabel htmlFor="">age:</StyledLabel>
      <input style={{textAlign:"center"}} ref={age} name="age" className="StyledInput"  type="number" />
      
      <StyledLabel htmlFor="">phone-number:</StyledLabel>
      <input style={{textAlign:"center"}} ref={phoneNumber} name="phoneNumber"  className="StyledInput"  type="text" />
      
      <StyledLabel  htmlFor="">Email:</StyledLabel>
      <input style={{textAlign:"center"}} ref={email} name="email" className="StyledInput"  type="text" />

      <StyledLabel  htmlFor="">textBox:</StyledLabel>
      <input style={{textAlign:"center",border:"none"}} ref={textBox} name="textBox" className="StyledInput"  type="text" />

   
    <StyledButton>Send</StyledButton>
      
    </StyleForm>
    </>
  )
}

export default Form;


