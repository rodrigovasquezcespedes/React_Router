import { FaHome, FaEnvelope, FaBirthdayCake } from 'react-icons/fa'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <Navbar expand='lg' bg='danger' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link className='nav-item nav-link p-3 text-white fs-5' to='/'>
            <FaHome className='me-1' /> Home
          </Link>
          <Link className='nav-item nav-link text-white fs-5' to='/contacto'>
            <FaEnvelope className='me-1' /> Contacto
          </Link>
          <Nav className='ms-auto'>
            <Navbar.Brand>Happy Cake <FaBirthdayCake className='me-1' />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
