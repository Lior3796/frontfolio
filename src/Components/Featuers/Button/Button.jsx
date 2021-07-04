import {useState,useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import Form from '../Form/Form';
import Input from '../Input/Input';
function Button({text,top,left,bottom,right,index, link}) {
    const [space,setSpace] = useState("0px");
    const [visiable,setVisiable] = useState(1);
    const [check,setCheck] = useState(false);

        
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
    const AnimationButtons = keyframes`
    0%{
        opacity:0;
       
    }
    %100{
        opacity:1;
       

    }
    `;
    const StyleContainer = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;

    `

    let StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    padding:8px 20px;
    border-radius: 4px;
    border:2px solid yellow;
    transition: all 0.3s ease-out;
    font-size:40px;
    margin:auto;
    transform:translateY(${space});
    position: absolute;
    top: ${top? top : "64%"};
    right: ${right? right : "0"};
    left: ${left};
    z-index:10;
    &:hover{
    padding: 8px 20px;
    transition: all 0.3s ease-out;
    background-color: #fff;
    color:#6568f4;
    transition: all 250ms;
    }
    @media (max-width: 827px) {
        top: ${top? top : "64%"};
        margin:auto;
      }`;

    
    const StyledDivAnimate = styled.div`
    animation:${check? AnimationButtons : "all"} 2s  ease-in;
    transition:550ms;
    pointer-events:none;
    height:60%;
    width: ${changeWidth < 827 ? "100%": "40%"};
    display:flex;
    justify-content:center;
    left:30%;
    `;

    function changePosition(){
      setCheck(true);
      setSpace("-200px");
     
    }
    
    
    return (
        <>
        {
          link ? <a target= " _blank" href={link}><button>{text}</button></a>
          : <></>
        }

       <StyledButton onClick={() => changePosition()} >{text}</StyledButton>
       <StyledDivAnimate>
       {
           check ? 
           <Form display addTextBox />
            : <></>
       }
       </StyledDivAnimate>
     
       </>
    );

}
export default Button;