import React from 'react';
import { useState, useContext } from 'react';
import CoverImage from '../../Featuers/CoverImage/CoverImage';
import TextArea from '../../Featuers/TextArea/TextArea';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import projectImage1 from '../../../Images/projectImage1.png';
import projectImage2 from '../../../Images/projectImage2.png';
import projectImage3 from '../../../Images/projectImage3Fix.png';
import projectImage4 from '../../../Images/projectImage4.png';
import Slider from '../../Featuers/Slider/Slider';
import SocialLink from '../../Featuers/SocialLink/SocialLink';
import Button from '../../Featuers/Button/Button';
import { SetPortfolioContext, PortfolioContextProvider} from '../../../Context2';
import { useEffect } from 'react';

function Portfolio() {
    const PorfolioContext = SetPortfolioContext();
    const portfolioImages = [projectImage1, projectImage2, projectImage3,projectImage4];

    const StyleProject = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     position:relative;
     padding:50px;
     `;

    const StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    padding:8px 20px;
    border-radius: 4px;
    border:1px solid yellow;
    transition: all 0.3s ease-out;
    font-size:40px;
    margin:auto;
    position: absolute;
    bottom:0;
    right:42%;
    z-index:10;
    &:hover{
    padding: 8px 20px;
    transition: all 0.3s ease-out;
    background-color: #fff;
    color:#6568f4;
    transition: all 250ms;
    }`;
    const StyledImgContainer = styled.div`
    position: relative;
    display:flex;
    width:70%;
    height:100%;
    margin:auto;
    `;

    const StyleH1 = styled.h1`
    width: 100%;
    font-size: 4rem;
    z-index: 100;
   `;

    function sendToAddress(e,url){
        e.preventDefault();
        window.location.href= url;
    }
    

    return (
        <PortfolioContextProvider value={PorfolioContext}>
         <StyleH1>My Portfolio</StyleH1>
            <StyleProject>

                <StyledImgContainer>
                <CoverImage   height="30vw" width="50vw" path={portfolioImages[0]} />
                </StyledImgContainer>
                <TextArea width="100%" height="50%" size="2rem" text={PorfolioContext.movies}  />
                
                
                <StyledButton type="button"
                onClick={(e) => sendToAddress(e,"https://github.com/Lior3796/office")} >
                    Movies
                </StyledButton>
                
            </StyleProject>

            <StyleProject>

            <StyledButton type="button"
                onClick={(e) => sendToAddress(e,"https://github.com/Lior3796/office")} >
                Office           
                </StyledButton>
                <StyledImgContainer>
                    <CoverImage height="30vw" width="50vw" path={portfolioImages[1]} />
                </StyledImgContainer>
                <TextArea width="100%" height="50%" size="2rem"  text={PorfolioContext.office} />
                
            </StyleProject>

            <StyleProject>
            <StyledImgContainer>
                <CoverImage height="30vw" width="50vw" path={portfolioImages[3]} />
            </StyledImgContainer>
                <TextArea width="100%" height="50%" size="2rem" text={PorfolioContext.HallOfFame} />
                <StyledButton type="button"
                onClick={(e) => sendToAddress(e,"https://github.com/Lior3796/office")} >
                    Hall Of fame
                </StyledButton>
            </StyleProject>
        </PortfolioContextProvider>
    );
}

export default Portfolio;