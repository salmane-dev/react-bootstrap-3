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
                <form >
                  <div className="form-inline d-flex form-control-lg mb-3" >
                    <div className="form-group  ">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-first-name">
                        First Name
                      </label>
                      <input className={inputfieldsstyling} id="grid-first-name" type="text" placeholder="Jane"></input>
                    </div>
                    <div className="form-group">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-last-name">
                        Last Name
                      </label>
                      <input className={inputfieldsstyling} id="grid-last-name" type="text" placeholder="Doe"></input>
                    </div>
                  </div>
                   
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="row w-full px-3">
                      <label className="col block uppercase tracking-wide text-white text-xl font-bold mb-2" for="email">
                        E-mailss
                      </label>
                      <input className="col appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="Doe@email.com" required></input>
                    </div>
                  </div>

                    <div className="form-group form-control-lg p-3">
                      <label for="exampleInputEmail">Email:</label>
                      <input type="email" className={inputfieldsstyling} id="exampleInputEmail" aria-describedby="emailHelp" Required></input>
                    </div>
                    <button type="submit" className=" btn btn-outline-light fs-4 px-5 m-3">Submit</button>


                </form>
            </div>
      </div>

    </div>
  )
}

export default Contact