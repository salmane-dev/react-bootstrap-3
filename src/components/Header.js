const data = require('../data.json'); 

const Header = () => { 

console.log(data.header.menu.textColor)

  return ( 
      <div className='text-center w-100 h-100 pt-5'>
        <header className="  pt-5">
            <div className=" text-center pt-5" style={{"color":data.header.menu.textColor}}>
              <h1 className="h1 display-3 bold">{data.header.title + window.location.hostname} </h1> 
              <p className="h4 p-3">{data.header.subtitle}</p> 
              <form>
                  <div className="input-group header_input fade-in-up">
                    <input type="email" className="form-control p-2" size="50" placeholder="Email Address" autoFocus required></input>
                    <div className="input-group-btn">
                        <button 
                          type="submit" 
                          className="btn btn-outline-light p-2 px-5"
                          style={{"color":data.header.menu.textColor}}> 
                              Subscribe
                        </button>
                    </div>
                  </div>
              </form>
            </div>
        </header>
      </div> 
  )
}

export default Header
