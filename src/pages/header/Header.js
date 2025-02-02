import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const token=localStorage.getItem("token");
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("./login")
  }
  return (
    <>
      <Navbar expand="lg" bg={token?"primary":"dark"} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">
            {token?"Logged-In":"Not-LoggedIn"}

          </Navbar.Brand>
          <Nav className="ml-auto">
            {token ? (
              <>
            <Nav.Link as={Link} to="/dashboard" className='nav-link'>Dashboard</Nav.Link>
            <Nav.Link className='nav-link' onClick={handleLogout}>Logout</Nav.Link>
            </>
            ):(
              <>
            <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className='nav-link' >SignUp</Nav.Link>
            </>
            )
          }
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
