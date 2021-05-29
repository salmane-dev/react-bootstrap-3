import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
  return (
    <Container fluid='md' className='home-screen row mx-auto align-items-center'>
      <Row>
        <Col>
          <div className='text-center'> 
            <div >
              <h2>Page Not Found</h2>
              <LinkContainer to='/'>
                <a href="/" className='link'>Home Page</a>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
