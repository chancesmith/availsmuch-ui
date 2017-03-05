import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../../css/Navbar.css';

class MainNav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         loggedIn: ""
      }
   }

   render() {
      return (
         <Navbar inverse collapseOnSelect>
            <Navbar.Header>
               <LinkContainer to="home">
                  <Navbar.Brand>Avails Much</Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav>
                  <LinkContainer to="requests">
                     <NavItem href="#">Prayer Requests</NavItem>
                  </LinkContainer>
                  <LinkContainer to="prayerList">
                     <NavItem href="#">Prayer List</NavItem>
                  </LinkContainer>
               </Nav>
               <Nav pullRight>
                  {
                     this.state.loggedIn
                        ? <NavItem href="#"><Glyphicon glyph="user"/> {this.state.loggedIn}</NavItem>
                        : <NavItem onClick={this.login}><Glyphicon glyph="log-in"/> Login</NavItem>
                  }
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      );
   }

   login = () => {
      this.setState({loggedIn: "Mallize"});
   }
}

export default MainNav;
