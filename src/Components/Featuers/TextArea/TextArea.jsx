import React from 'react';
import styled from 'styled-components';
function TextArea({text,width,height,size}) {
   
    const StyleP = styled.p`
    text-align:center;
    width:${width};
    height:${height};
    font-size:${size};
    `;

    return (
        <StyleP>
         {text} 
        </StyleP>
    );
}

export default TextArea;