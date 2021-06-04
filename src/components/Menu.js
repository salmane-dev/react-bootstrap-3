
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const data = require('../data.json'); 

const Menu = () => {
 
 

  const menu_item = "px-4 h5 menu_item m-auto mx-2 shadow rounded-pill "
  return (
	<Navbar  variant='dark' expand='lg' collapseOnSelect>
      <Container id="my_menu">
        <LinkContainer to='/'>
          <Navbar.Brand className={menu_item}>{window.location.hostname}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className="bg-dark"/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto' >
            <LinkContainer to='/'>
              <Nav.Link className={menu_item} >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/privacy'>
              <Nav.Link className={menu_item} >Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/unsubscribe'>
            <Nav.Link className={menu_item} >Unsubscribe</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link className={menu_item} >Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Menu
