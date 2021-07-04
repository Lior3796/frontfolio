import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextArea from '../TextArea/TextArea';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CoverImagesContext, CoverImagesContextProvider, SetCoverImagesContext } from '../../../Context2';

function Progress({ subjects,precent }) {
 const [cardNumber,SetCardNumber] = useState(0);
  const CoverImages = useContext(CoverImagesContext);
  const StyledUl = styled.ul`
    display: flex;
     justify-content: space-between;
     align-items:center;
     flex-flow:column;
     list-style: none;
     font-size: 80px; 
     postition:absolute;
     bottom: 8px;
     height: 37%;
     margin-top: auto;
     @media (max-width: 827px) { 
      postition:absolute;
      right:0;
      z-index:100;
      height: 37%; 
  }
    `;

  const StyledLi = styled.li`
     font-size: 3rem;
        
    `;
  const ProgressContainer = styled.div`
  width:100%;
  height:100%;
  border-radius:10px;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  position:relative;
  @media (max-width: 827px) {
  display:flex;
  flex-direction:row;
  justify-content:space-between;  
  
}
  `;
  const StyleImg = styled.img`
  position: absolute;
  border-radius: 5px;
  width: 100%;
  height: 40%;
  top: 10%;
  @media (max-width: 827px) {
    display:flex;
    flex-direction:row;
    width: 40%;
    height: 100%;
    justify-content:space-between;
    display: flex;
    flex-direction: row;
    width: 40%;
    height: 90%;
    justify-content: flex-end;
  }
  `;

  const StyleH1 = styled.h1`
    position: absolute;
    top: -68px;
    width: 100%;
    font-size: 4rem;
    z-index: 100;
  `

  

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      width: "30%",
      margin: "auto",

    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',

    },
  }))(LinearProgress);

  // Inspired by the former Facebook spinners.
  const useStylesFacebook = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      color: '#1a90ff',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }));
  function FacebookCircularProgress(props) {
    const classes = useStylesFacebook();

    return (
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,

          }}
          size={40}
          thickness={4}
          {...props}
        />
      </div>
    );
  }

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      border: "1px solid white",
      width: "50%",
      margin: "auto"
    },
  });

  const classes = useStyles();
 
  return (
 
     <ProgressContainer>
    <StyleH1>{subjects.header}</StyleH1>

    <StyleImg  src={subjects.image}/>

      <StyledUl>

          {
            subjects.titles.map((key,index)=>{
           return (
              <>
              
              <StyledLi key={index}>{key}</StyledLi>
              <BorderLinearProgress variant="determinate" value={subjects.progress[index]} />
              </>
            )})
              
          }

      </StyledUl>
      </ProgressContainer>

    
  );
}


export default Progress;