import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap"
// import the routes so we can swap between them
import Routes from "./Routes"
// Container for the entire app
class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      isAuthenticated:false
    }
  }
  hasAuthenticated = auth => {
    this.setState( {
      isAuthenticated: auth
    });
  }
  handleLogout = e => {
    this.hasAuthenticated(false);
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated
    }
    return (
      <div className = "App Container">
      <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar.Brand href="/home"><span aria-controls="icon" size="large">📇</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            {this.state.isAuthenticated
              ? <Nav.Link href="/home" onClick = {this.handleLogout}>Logout </Nav.Link>
              : <Fragment>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Fragment>
            }
          </Nav>
        </Navbar.Collapse>
         {/*TODO(Levi): port to bootstrap 4 (Complete)*/}
       </Navbar>
      <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;
