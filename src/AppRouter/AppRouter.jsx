import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../Components/Pages/Home/Home';
import Portfolio from '../Components/Pages/Portfolio/Portfolio';
import Skills from '../Components/Pages/Skills/Skills';
import ContactMe from '../Components/Pages/ContactMe/ContactMe';
import styled from 'styled-components';
function AppRouter() {

    return (
        
        <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>

            <Route path="/ContactMe">
              <ContactMe />
            </Route>

          
        </Switch>
        
    );
}

export default AppRouter;