const data = require('../data.json'); 

const Header = () => { 

  return ( 
      <div className='text-center w-100 h-100 pt-5'>
        <header className="  pt-5">
            <div className=" text-center pt-5 text-light">
              <h1 className="h1 display-2 bold">{data.header.title}</h1> 
              <p className="h4 p-3">{data.header.subtitle}</p> 
              <form>
                  <div className="input-group header_input fade-in-up">
                    <input type="email" className="form-control p-2" size="50" placeholder="Email Address" autoFocus required></input>
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-outline-light p-2 px-5 ">Subscribe</button>
                    </div>
                  </div>
              </form>
            </div>
        </header>
      </div> 
  )
}

export default Header
