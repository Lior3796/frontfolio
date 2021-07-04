import React from 'react';
import styled from 'styled-components';

function SocialLink({path,title}) {
    const StyledLink = styled.a`
    text-decoration:none;
    position:absolute;
    bottom:0px;
    left:50%;
    `
    return (
        <StyledLink target="_blank" href={path}>{title}</StyledLink>
    );
}

export default SocialLink;