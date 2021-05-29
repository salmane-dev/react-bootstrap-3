import Header from '../components/Header'
import Body from '../components/Body'
const data = require('../data.json'); 

const Home = ({ pageTitle, pageDescription }) => {
  // page content

  const home_screen_bg = {
    background: 'url(' + data.header.img1 + ') ',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color:"grzay"
  }

  return (
    <div> 
        <div className="bg-light home-screen" style={home_screen_bg}> 
          <Header pageTitle={pageTitle} pageDescription={pageDescription} />
        </div>
        <Body pageTitle={pageTitle} pageDescription={pageDescription} />
    </div>

  )
}

export default Home