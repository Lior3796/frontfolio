import React from 'react';
import { SetCoverImagesContext } from '../../Context2';
import CoverImage from '../Featuers/CoverImage/CoverImage'
import Progress from '../Featuers/Progress/Progress';
import styled, { keyframes } from 'styled-components';
import Button from '../Featuers/Button/Button'
import { useState,useEffect,useContext } from 'react';

import { SetSkillsContext,SkillsContextProvider } from '../../Context2';

function SkillsCard({index}) {
    const [changeWidth,setChangeWidth] = useState(false);
    const skillsData = SetSkillsContext();
  
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

    const StyledCard = styled.div`
    width:${changeWidth > 1080 ? "30%" : "50%"};
    position:relative;
    margin:auto;
    display:flex;
    height:40%;
    justify-content:space-between;
    `;

    return (
        <SkillsContextProvider value={skillsData}>
        <StyledCard>
            <Progress subjects={skillsData[index]} />
        </StyledCard>
        </SkillsContextProvider>
    );
}

export default SkillsCard;