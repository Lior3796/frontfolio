import styled, { keyframes } from 'styled-components';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Slider.css';
function Slider() {
 const [position,setPosition] = useState(0);
 const SliderContainer = styled.div`
 width:60vw;
 height:80;
 overflowX:hidden;
 margin:auto;
 `;
 const AnimateSlider = keyframes`
 %0{
     opacity:0;
    transform:translateX(${position});
 }
 100%{
    opacity:1;
 }
 `
 const Slider = styled.div `
 display:flex;
 justify-content:space-between;
 width:100%;
 height:80vh;
 animation:${AnimateSlider} 3 1s ease-in;

 `;

 const StyledImg = styled.img`
 width:50%;
 height:100%;
 `;
const [sliderParent,setSliderParent] = useState(null);
  const [counter,setCounter] = useState(0);
 const carouselSlide = useRef();
const carouselImages = useRef();
const image1 = useRef();
const image2 = useRef();
const image3 = useRef();
const imagesArray = [image1,image2,image3];
const size = "500px";
// buttons
const prevBtn = useRef();
const nextBtn = useRef();
// counter

function moveSlide() {
    console.log(image1.current);

}


    return(
<>
        <div class="carousel-container" ref={carouselImages}>
        <div class="carousel-slide" ref={carouselSlide}>
            <img ref={image1} src="https://www.fcbarcelona.com/photo-resources/2020/10/13/9c7ca547-2ac3-4d95-bf32-c3820e5881c0/mini_braithwaite.jpg?width=840&height=525" id="last-clone" alt=""/>
            <img ref={image2} src="https://www.fcbarcelona.com/photo-resources/2020/10/08/4c6a9daf-dbdc-48b5-9185-3f13e7c46d36/mini_ter_stegen.jpg?width=840&height=525" alt=""/>
            <img ref={image3} src="https://www.fcbarcelona.com/photo-resources/2020/10/08/4c6a9daf-dbdc-48b5-9185-3f13e7c46d36/mini_ter_stegen.jpg?width=840&height=525" id="first-clone" alt=""/>
        </div>
    </div>
    <button onClick = {() => moveSlide("-")} ref={prevBtn}>prev</button>
    <button onClick = {() => moveSlide("+")} ref={nextBtn}>next</button>
</>


)
}
export default Slider;