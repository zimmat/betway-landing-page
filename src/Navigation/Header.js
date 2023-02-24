import React, { Fragment } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import LoginModal from '../Modals/login-modal'


const Header = () => {
  return (
    <Fragment>
        <Navbar expand="lg" className="flex-nowrap topnav">
      <Container>
      <a href="/"> <img src="https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png" className="logo" /> </a>
        <Nav className="ml-auto floatRight">
        <LoginModal/>
          <Nav.Link href="#"><button className="signupBtn">Signup</button></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default Header
