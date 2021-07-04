import React from 'react';
import styled from 'styled-components';
import CoverImage from '../CoverImage/CoverImage';
import img from '../../../Images/tech-career.png';
import indiCom from '../../../Images/IndiCom.jpeg';

function Header(props) {
    const StyledHeader = props.StyledDiv;
    const StyledHeadline = styled.h1`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    `;
    return (
        <StyledHeader>
            <CoverImage path={img} width="80px" height="80px" />
            <StyledHeadline>Liorlsa9@gmail.com</StyledHeadline>
            <CoverImage path={indiCom} width="80px" height="80px" />
        </StyledHeader>
    );
}

export default Header;