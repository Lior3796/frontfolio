import { Link as Link1 } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import styled, { keyframes, StyledComponent } from "styled-components";
import { useState, useEffect} from "react";

function Link() {
  const [changeWidth,setChangeWidth] = useState(false);
  const [showHamNavbar,setShowHamNavbar] = useState(false);
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

  const [changePosition,setChangePosition] = useState(650);
  const responsiveLayout = {
   show:changeWidth > 600 ? false : true,
   display: changeWidth > 600 ? "flex": "flex",
   width: changeWidth > 600 ? "15%": "0",
   height: changeWidth > 600 ? "100%": "0",
  }
  const hamAnimation = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
  `
  const hamNavbar = {
    show:{
    width:"500px",
    height:"50%",
    display: showHamNavbar? "flex": "none",
    justifyContent:"space-between",
    position:"fixed",
    left:"5%"
  }
  }

  const StyledNav = styled.nav`
    display:${responsiveLayout.display};
    justify-content:space-around;
    width:${responsiveLayout.width};
    position:fixed;
    top:15%;
    left:20px;
    flex-flow:row-wrap;
    z-index:10;
    `
  const StyledHeadline = styled.h1`
    text-align:center;
    font-size:35px;
    `
  const StyledIcons = styled.div`
  width:100%;
  height:300px;
  display:flex;
  flex-flow:column;
  justify-content:space-between;
  z-index:10;
  `;

  const HamButton = {
    textAlign: "left",
    position: "fixed",
    width:"0",
    left: "0",
    top: "25%",
    background: "transparent",
    border: "none",
    transition:"all 3s ease-in",
    hover:{
      width:"100%",
      background:"yellow"
    }
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        background: "#2c2d2fb3",
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
      
    },
    StyledIcons:{
      transition:`all 2500ms ease-in`,
      width:"100%"
    
    }
  }));
  const classes = useStyles();
  return (
    <>
    {
      changeWidth < 600? <button style={HamButton} onClick={() => {setShowHamNavbar(!showHamNavbar)}}><i style={{fontSize:"21px",color:"white"}} class="fas fa-bars"></i></button> : <></>
    }
      <StyledNav >
        <StyledIcons  >
        <Fab style={{background:"white"}} color="primary" aria-label="add">
          <Link1 style={{fontSize:"13px"}} to="/Home">Home</Link1>
        </Fab>
        <Fab style={{background:"white"}} color="secondary" aria-label="edit">
          <Link1 style={{fontSize:"10px"}} to="/ContactMe">Contact</Link1>
        </Fab>
        <Fab style={{background:"white"}}>
          <Link1 style={{fontSize:"13px"}} to="/Skills">Skills</Link1>
        </Fab>

        <Fab style={{background:"white"}} aria-label="like">
          <Link1 style={{fontSize:"10px"}} to="/Portfolio"><NavigationIcon className={classes.extendedIcon} /></Link1>
        </Fab>
        </StyledIcons>
        
      </StyledNav>
    </>
  );
}

export default Link;