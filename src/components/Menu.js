
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const data = require('../data.json'); 

const Menu = () => {
 
  const nav_item_style = {
    color: data.header.menu.textColor
  }

  const menu_item = "px-4 h5 menu_item m-auto mx-2 shadow rounded-pill "
  return (
	<Navbar  variant='dark' expand='lg' collapseOnSelect>
      <Container id="my_menu">
        <LinkContainer to='/'>
          <Navbar.Brand className={menu_item}>{window.location.hostname}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className="bg-dark"/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto' style={nav_item_style}>
            <LinkContainer to='/'>
              <Nav.Link className={menu_item} style={nav_item_style}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/privacy'>
              <Nav.Link className={menu_item} style={nav_item_style}>Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/unsubscribe'>
            <Nav.Link className={menu_item} style={nav_item_style}>Unsubscribe</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link className={menu_item} style={nav_item_style}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

      
      <style dangerouslySetInnerHTML={{__html: `
          #my_menu a{color:`+ data.header.menu.textColor +`!important}
       `}} />


    </Navbar>

  )
}

export default Menu
