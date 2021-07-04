import React from 'react';
import CoverImage from '../../Featuers/CoverImage/CoverImage';
import Progress from '../../Featuers/Progress/Progress';
import {useContext,useState,useEffect} from 'react';
import SkillsCard from '../../SkillsCard/SkillsCard';
import { CoverImagesContext,CoverImagesContextProvider,SetCoverImagesContext } from '../../../Context2';
import styled, { keyframes } from 'styled-components';

function Skills() {
    const [changeWidth,setChangeWidth] = useState(false);
    const CoverImages = useContext(CoverImagesContext);
  
    

    const AnimateSlider = keyframes`
    100%{
      opacity:1;
       }
    `
    const StyledSkills = styled.div`
    width:100%;
    height:220vh;
    flex-flow:wrap;
    display:flex;
    justify-content:space-between;
    position:relative;
    
    animation:${AnimateSlider} 3s 1s ease-in;
    @media (max-width: 827px) {
    display:flex;
    flex-flow:wrap;
    position:relative;
    flex-direction:column;
    width:100%;
        
}`;
    const StyleH1 = styled.h1`
    width: 100%;
    font-size: 4rem;
    z-index: 100;
   `;
    return (
      
        <CoverImagesContextProvider value={CoverImages}>

            <StyleH1>My Skills</StyleH1>
        <StyledSkills>

        <SkillsCard  index={0} /> 
        <SkillsCard  index={1} /> 
        <SkillsCard  index={2} /> 

        <SkillsCard  index={3} /> 
        <SkillsCard  index={4} /> 
        <SkillsCard  index={5} /> 

        </StyledSkills>
        </CoverImagesContextProvider>

       
    );
}

export default Skills;