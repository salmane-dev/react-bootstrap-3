const data = require('../data.json'); 


const Body = ({ img1,img2 }) => {
  return (
    <div>
      <div className="container about"> 
              <div id="about" className="container-fluid bg-grey mb-4">
                <div className="row">
                  <div className="col-sm-8 "> 
                      <p className="font-weight-light" style={{ fontSize:"1.4rem"}}> 
                          You've found   { window.location.hostname +" "+ data.body.parag1} 
                      </p>  
                      <p className="font-weight-light" style={{ fontSize:"1.4rem"}}> 
                            {data.body.parag2}  
                      </p> 
                      <a href="/contact" className="btn btn-outline-dark fs-4 px-5">Join us now</a>
                  </div>
                  <div className="col-sm-4">
                    <span className="glyphicon glyphicon-signal logo slideanim  ">
                          <img src={data.body.img1} alt="image" className="w-100"/>
                    </span>
                  </div>
                </div>
              </div> 
          </div>
    </div>
  )
}

export default Body
