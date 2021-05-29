import Meta from '../components/Meta'

const data = require('../data.json'); 

const Contact = () => {
  
  const home_screen_bg = {
    background: 'url(' + data.contact.img1 + ')',
    backgroundSize: 'cover',
    minHeight:'84vh'
  }

  return (
    <div className="home-screen p-5 bg-cover" style={home_screen_bg}>
      <Meta title={data.contact.pagetitle}/>
      <div className="mw-75 mx-auto text-white ">
            <div className="container ms-auto w-100 ">
                <div className="unsubscribe p-2 m-auto  ">
                    <h1 className="fs-1 font-weight-bold fs-bold text-light pt-5 pb-3">{data.contact.pagetitle}:</h1>
                    <p className=" fs-3 font-weight-bold fs-bold text-white">
                        {data.contact.pagedescription}
                    </p>
                </div>
            </div>

            <div className="form-div m-6 mw-50 mx-auto fade-in-up">
                <form >
                    <div className="form-group form-control-lg">
                      <label for="exampleInputfirstname">First Name:</label>
                      <input type="text" className="form-control" id="exampleInputfirstname" autoFocus ></input>
                    </div>
                    <div className="form-group form-control-lg">
                      <label for="exampleInputlastname fs-2">Last Name:</label>
                      <input type="text" className="form-control" id="exampleInputlastname"></input>
                    </div>
                    <div className="form-group form-control-lg">
                      <label for="exampleInputEmail">Email:</label>
                      <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" Required></input>
                    </div>
                    <button type="submit" className=" btn btn-outline-light fs-4 px-5 m-3">Submit</button>
                </form>
            </div>
      </div>

    </div>
  )
}

export default Contact