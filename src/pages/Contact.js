import Meta from '../components/Meta'

const data = require('../data.json'); 


const inputfieldsstyling = "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"

const Contact = () => {
  
  const home_screen_bg = {
    background: 'url(' + data.contact.img3 + ') no-repeat',
    backgroundSize: 'cover' 
  }

  return (
    <div className="home-screen ">
      <Meta title={data.contact.pagetitle}/>
      <div className="mw-75 mx-auto text-white  bg-cover banner" style={home_screen_bg}>
            <div className="container ms-auto w-100 topbanner">
                <div className="unsubscribe p-2 m-auto  ">
                    <h1 className="fs-1 font-weight-bold fs-bold text-light pt-5 pb-3">{data.contact.pagetitle}:</h1>
                    <p className=" fs-3 font-weight-bold fs-bold text-white">
                        {data.contact.pagedescription}
                    </p>
                </div>
            </div>

            <div className="form-div m-6 mw-50 mx-auto fade-in-up topbanner">
                 
                  <form required>
                        <div className="row name-sub my-4 py-1 flex-md-wrap">
                          <div className="form-group col">
                            <label for="firstname">First Name</label>
                              <input id="firstname" className="form-control p-3" name="firstname" type="text" required ></input>
                          </div>
                          <div class="form-group col">
                              <label for="lastname">Last Name</label>
                              <input id="lastname" className="form-control p-3" name="lastname" type="text" required ></input>
                          </div>
                        </div>
                        <div className="form-group my-4 py-1">
                            <label for="email">Email</label>
                            <input id="email" className="form-control p-3" name="email" type="email" required ></input>
                        </div>  
                        <div className="form-group text-center m-4">
                                <button type="submit" value="Send" className="btn btn-light text-dark px-5">Send</button>
                        </div>
                  </form>
            </div>
       </div>
    </div>
  )
}

export default Contact