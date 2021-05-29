const data = require('../data.json'); 


const Footer = () => {
  return (
    <div>
      <footer className='text-center myfooter py-3'>
      <span>{data.footer.text + data.header.website} </span>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
          .myfooter{
            background-color:`+ data.footer.background +`!important;
            color:`+ data.footer.textColor +`!important;
          }
       `}} />

    </div>
  )
}

export default Footer
