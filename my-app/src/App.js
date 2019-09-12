import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap"
// import the routes so we can swap between them
import Routes from "./Routes"
// Container for the entire app
class App extends Component {
  render() {
    return (
      <div className = "App Container">
      <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
         {/*TODO(Levi): port to bootstrap 4 (Complete)*/}


       </Navbar>
      <Routes/>
      </div>
    );
  }
}

export default App;
