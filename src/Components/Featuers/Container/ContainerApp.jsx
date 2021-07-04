import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import styled from 'styled-components';
import { useContext} from 'react';
import { SetPortfolioImagesContext, PortfolioImagesContextProvider} from '../../../Context2';

 function ContainerApp() {

  const StyledHeader = styled.div`
  background:#2c2d2fb3;
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  `;
  
  return (
      <Container style={{backgroundColor:"#171717"}} class="containter" maxWidth="md">
        
        <Header StyledDiv = {StyledHeader} />
        <SideBar />
       <Footer StyledDiv = {StyledHeader}  />
      </Container>
  );
}
export default ContainerApp;