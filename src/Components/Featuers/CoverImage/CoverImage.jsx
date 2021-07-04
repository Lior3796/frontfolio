import React from 'react';
import {useState,useContext} from 'react';
import {SetCoverImagesContext,CoverImagesContextProvider,CoverImagesContext} from '../../../Context2';
import styled from 'styled-components';
import TextArea from '../TextArea/TextArea';

function CoverImage({path,text,height,width,divWidth,withAnimation,direction}) {


    const imgHoverAnimation = `&:hover{
        transition:all 200ms ease-out;
        box-shadow: 0 0 100 100 black;
        background:white;
        }`;

    const divHoverAnimation = `&:hover{
        transition:all 250ms ease-in;
        background:white;
        border:5px solid black;
        z-index:1000;
    `;

    const StyledImg = styled.img`
    width:${!width ? "400px" : width};
    height:${!height ? "400px" : height};
    border-radius:10px;
    margin:auto;
    object-fit: cover;
    ${withAnimation ? imgHoverAnimation : <></> }
    `;
    const StyledDivCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:${direction ? "column" : "row"};
    width:${divWidth? "80%" : "30%"};
    height:30%;
    margin:auto;
    ${withAnimation ? divHoverAnimation : <></> }
    `
    return (
        <StyledDivCard>
       <StyledImg src={path} alt="BUG" />
       <TextArea  text={text} />       
       </StyledDivCard>
    );
}

export default CoverImage;