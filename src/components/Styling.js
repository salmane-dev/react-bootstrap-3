 

const data = require('../data.json'); 


const Styling = ( ) => {
  return (

    <style dangerouslySetInnerHTML={{__html: `
    .jumbotron, .menu_item, .navbar .menu_item{
      backGround:`+ data.header.menu.background +`!important;
      color:`+ data.header.menu.textColor +`!important;
      font-weight: `+ 500 +`; 
}
`}} />


  )
}

export default Styling
