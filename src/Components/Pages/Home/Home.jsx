import React,{useContext,useState,useEffect} from 'react';
import { ImagesContextProvider, SetImagesContext,} from '../../../Context2';
import CoverImage from '../../Featuers/CoverImage/CoverImage';
import project1 from '../../../Images/project1.jpg';
import project2 from '../../../Images/project2.jpg';
import project3 from '../../../Images/project3.jpg';
import project4 from '../../../Images/project4.jpeg';
import Fitness from  '../../../Images/Fitness.jpeg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { SetCvContext,CvContextProvider } from '../../../Context2';
import styled, { keyframes } from 'styled-components';
import { Icon } from '@material-ui/core';
import { useMemo } from 'react';

function Home() {
  const Images = SetImagesContext();
  const Cv = SetCvContext();



  const [changeWidth,setChangeWidth] = useState(false);
  
  const updateWidth = () => {
    const changeWidth = window.innerWidth;
    console.log(changeWidth);
    setChangeWidth(changeWidth);
  }

  useEffect(() => { 
    
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => 
      window.removeEventListener("resize",updateWidth);
   }, []);
  
  useMemo(()=>{
    updateWidth();
  },[changeWidth])
  
  const StyleImageAnimation = keyframes`
  0%{
    opacity:0;
  }
  100%{
   opacity:1;
    
  }
  `;
  const StyledDiv = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content: space-between;
   justify-content: center;
   flex-direction:column;
   height:100%;
   width:100%;
   margin:auto; 
   animation:${StyleImageAnimation} 3s ease-in;
   overflow:hidden;
   top:0px;
   #container:hover, {
    background:white;
    color:black;
    opacity:0.6;
    transition: all 150ms ease-out ; 
    top:50px;
  };
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `;

  const StylecCoverDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:550px;
  width:100%;
  background-size:100%,70%,cover;
  background-repeat:no-repeat;
  background-image:url('https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=1040');
  background-position: center;
  font-size:100px;
  color:black;
  border:5px solid black;
  #sliderContainer {
  width:400px;
  }
  @media (max-width: 827px) {
    width:100%;
    display:none;
  }
  `;
  
  const Slider = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content: space-between;
   justify-content: center;
   height:100%;
   width:100%;
   background:rgb(23, 23, 23);
   overflow:hidden;
   &:hover{
   color:black;

   }
   @media (max-width: 707px) {
    flex-direction : column;
    
  }
 `;
 const StyledStick = styled.div`
 width:100%;
 height:70px;
 
 background:transparent;
 margin-bottom:20px;
 display:flex;
 justify-content:space-around;
 align-items:center;
 border-radius:10px;

 `;

 const StyledP = styled.p`
font-size:1.9rem;
margin:0;
 `;
 const StyledUl = styled.div`
 display:flex;
 align-items:center;
 flex-direction:column;
 justify-content:space-between;
 text-align:left;
 width:100%;
 margin:auto;
 
 `;
 const StyledLi = styled.p`
font-size:3.8rem;
margin:10px;
 `;
 const StyledH1 = styled.h1`
 font-size:2.3rem;
  `;

  const imageProperties = {
    divWidth: changeWidth > 707 ? false : true
   }

    return (
      <StyledDiv id="container" >
      <CvContextProvider value={Cv}>
      <StylecCoverDiv>
      <h1  className= "animate__animated animate__bounce animate">My Portfolio</h1>
      </StylecCoverDiv>

      <StyledStick>
      <i style={{fontSize:"60px"}}  class="devicon-react-original colored" ></i>
      <i style={{fontSize:"60px"}}  class="devicon-javascript-plain colored" ></i>
      <i style={{fontSize:"60px"}}  class="devicon-nodejs-plain colored" ></i>
      <i style={{fontSize:"60px"}}  class="devicon-vuejs-plain colored" ></i>
      </StyledStick>
      
    <StyledDiv >
      <StyledH1>Welcome to my Portfolio</StyledH1>
      <StyledP>My Name is Lior Solomon I'm a FullStack Developer student at Tech Carrer</StyledP>
      <StyledP>I'm a social media manager have a certificate from UTECH.</StyledP>
      <StyledP>I have an Experience in fitness industry as a personal trainer and gym instructor</StyledP>
      <StyledP>As a part of my Knowldage I experienced in programming languages as:</StyledP>
    </StyledDiv>

    <StyledUl>
        <StyledLi className="animate__animated animate__bounce animate__faster">
          HTML 
        <i class="devicon-html5-plain-wordmark"></i>  
        </StyledLi>
        <StyledLi>CSS
        <i class="devicon-css3-plain"></i>
        </StyledLi>
        <StyledLi>React
        <i class="devicon-react-original-wordmark"></i>
        </StyledLi>
        <StyledLi>CSharp
        <i class="devicon-dotnetcore-plain"></i>
        </StyledLi>
        <StyledLi>JavaScript <i class="devicon-javascript-plain"></i> </StyledLi>

      </StyledUl>

      <Slider>

        <CoverImage direction withAnimation divWidth={imageProperties.divWidth}   width="100%" path={project1} text={Cv[0]} />      
      <CoverImage direction withAnimation divWidth={imageProperties.divWidth}    width="100%" path={project4} text={Cv[1]}/>
      <CoverImage direction withAnimation divWidth={imageProperties.divWidth}   width="100%" path={project3} text={Cv[2]}/> 

      </Slider>
      
      </CvContextProvider>
      </StyledDiv>
    );
}

export default Home;