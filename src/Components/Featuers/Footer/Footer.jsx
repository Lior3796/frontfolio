import React from 'react';
import style,{styled} from 'styled-components';

function Footer(props) {
   const StyledDiv = props.StyledDiv;
   const StyledUl = style.ul`
   display: flex;
    width: 100%;
    justify-content: space-between;
    list-style: none;
    font-size: 30px;
    height:100%;
   `;
    return (
        <StyledDiv>
            <StyledUl>
                <li ><a href="https://github.com/Lior3796"><i style={{color:"white"}} class="fab fa-github"></i></a> </li>
                <li ><a href="https://www.linkedin.com/notifications/"><i style={{color:"white"}} class="fab fa-linkedin-in"></i></a></li>
                <li ><a href="https://www.facebook.com/liorlsa9"><i style={{color:"white"}} class="fab fa-facebook"></i></a></li>
            </StyledUl>
        </StyledDiv>
    );
}

export default Footer;