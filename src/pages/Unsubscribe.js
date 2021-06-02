import Meta from '../components/Meta'

const data = require('../data.json'); 

const Unsubscribe = () => {
  // page content
  const pageTitle = 'Unsubscribe'
  const pageDescription = 'If at any time you\'d like to unsubscribe from our mailing list, please enter your email address below.'

  const home_screen_bg = {
    background: 'url(' + data.unsubscribe.img3+')  ',
    backgroundSize:'cover', 
  }

  const home_screen = { 
  position: "relative",
  minHeight: "84vh",
  zIndex: "3"
  }


  return (
    <div style={home_screen}>
      <Meta title={pageTitle}/> 
      <div className="mw-75 mx-auto text-white  bg-cover banner" style={home_screen_bg}>
          <div className="container unsubscribe pt-5 m-auto  topbanner">
              <h1 className="fs-1 font-weight-bold fs-bold text-light pt-5">Unsubscribe :</h1>
              <p className=" fs-3 font-weight-bold fs-bold text-white">
                  {pageDescription}
              </p>
              <form>
                <div className="fade-in-up">
                      <div className="input-group header_input"> 
                          <input type="email" className="form-control p-2" size="60" placeholder="Email Address" required autoFocus ></input> 
                      </div>
                      <div className="input-group-btn text-center">
                              <button type="submit" className="btn btn-danger p-2 px-5">Unsubscribe</button>
                      </div>
                </div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Unsubscribe