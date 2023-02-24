import React, { Fragment } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'


const Header2 = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="flex-nowrap bottomnav">
      <Container>
          <Nav className="ml-auto">
            <Nav.Link href="#">sports</Nav.Link>
            <Nav.Link href="#">live & real</Nav.Link>
            <Nav.Link href="#">casino</Nav.Link>
            <Nav.Link href="#">esport</Nav.Link>
            <Nav.Link href="#">vegas</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default Header2