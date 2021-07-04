import React from 'react';
import Link from '../Link/Link';
import AppRouter from '../../../AppRouter/AppRouter';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

function SideBar() {


 const StyledSideBar = styled.aside`
 width:100%;
 height:100%;
 list-style:none;
 position:relative;
    `;

    return (
        <StyledSideBar>
            <Router>
                <Link />
                <AppRouter />
            </Router>
        </StyledSideBar>
    );
}

export default SideBar;