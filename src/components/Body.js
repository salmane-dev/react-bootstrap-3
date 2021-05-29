const data = require('../data.json'); 


const Body = ({ img1,img2 }) => {
  return (
    <div>
      <div className="container about"> 
              <div id="about" className="container-fluid">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>About Company Page</h2> 
                    <h4> 
                        You've found {data.header.website} {data.body.parag1} 
                    </h4>  
                    <a href="/contact" className="btn btn-outline-dark fs-4">Join us now</a>
                  </div>
                  <div className="col-sm-4">
                    <span className="glyphicon glyphicon-signal logo slideanim  ">
                          <img src={data.body.img1} alt="" className="w-100"/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="container-fluid bg-grey">
                <div className="row">
                  <div className="col-sm-4">
                    <span className="glyphicon glyphicon-globe logo slideanim ">
                          <img src={data.body.img2} alt="" className="w-100 "/>
                    </span>
                  </div>
                  <div className="col-sm-8 grph2">
                    <h2>Our Values</h2> 
                    <h4> 
                          {data.body.parag2}  
                    </h4> 
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Body
