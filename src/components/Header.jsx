import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
         <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand> <Link to={'/'}>NukeBookMarket</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
              Главная
              </Link>
            </Nav.Link>
             <Nav.Link> 
            <Link to={'/favorites'}>
            Избранное
            </Link>
             </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'}>
              Корзина
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to={'/description'}>
              О нас
              </Link>
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Header