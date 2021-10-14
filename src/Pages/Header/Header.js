import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainImg from '../../img/logo2.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand href="/"> <img width="150" className='py-4' src={mainImg} alt="" /> </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ">
                                <Link to='/cart' className='px-3 py-2 text-dark text-decoration-none'><i className="fas fa-shopping-cart"></i></Link>
                                <Link to='/login' className='px-3 text-dark py-2 text-decoration-none fw-bolder'>Login</Link>
                                <Link to='/signup' className='rounded-pill text-decoration-none px-3 py-2 text-white search-btn'>Sign up</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;