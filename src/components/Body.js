import { LinkContainer } from 'react-router-bootstrap'
// import {  Nav  } from 'react-bootstrap'
const data = require('../data.json'); 


const Body = ({ img1,img2 }) => {
  return (
    <div>
      <div className="container about"> 
              <div id="about" className="container-fluid bg-grey mb-4">
                <div className="row">
                  <div className="col-sm-8 "> 
                      <p className="font-weight-light" style={{ fontSize:"1.4rem"}}> 
                          You have Found   { window.location.hostname +" "+ data.body.parag1} 
                      </p>  
                      <p className="font-weight-light" style={{ fontSize:"1.4rem"}}> 
                            {data.body.parag2}  
                      </p> 
                      {/* <a href="/contact" className="btn btn-outline-dark fs-4 px-5">Join us now</a> */}
                      {/* <LinkContainer to='/contact' className="btn btn-outline-dark fs-4 px-5">Join us now</LinkContainer> */}
                      <LinkContainer className="btn btn-outline-dark fs-4  " to='/contact'>
                          <span className="btn btn-outline-dark fs-4 px-5">contact</span>
                      </LinkContainer>
                  </div>
                  <div className="col-sm-4">
                    <span className="glyphicon glyphicon-signal logo slideanim  ">
                          <img src={data.body.img1} alt="landing page 2" className="w-100"/>
                    </span>
                  </div>
                </div>
              </div> 
          </div>
    </div>
  )
}

export default Body
