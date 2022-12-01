import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='fs-4 text-info ecommerce'>
            Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <div>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/login'>
                  <i className='fa-regular fa-user fs-2 text-info'></i>
                </Nav.Link>

                <Nav.Link className='fs-4 text-info' as={Link} to='/purchases'>
                  Purchases
                </Nav.Link>
                <Nav.Link onClick={handleShow}>
                  <i className='fa-solid fa-cart-shopping fs-2 text-info'></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </>
  )
}

export default NavBar
