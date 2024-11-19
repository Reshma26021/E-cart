import React from 'react'


const Footer = () => {
  return (
  <>
  <div className=' bg-violet-600  text-white p-8 mt-5'>
      <div className="flex items-start justify-evenly">
        <div className="col">
          <i className='fa-solid fa-truck-fast me-1'></i> <span className='font-bold'>E cart</span>
          <p>Designed and built with all love in the world by <br />the Luminar team with the help of our <br />contributers. <br />Code licensed Luminar,docs CC BY 3.0. <br />Currently v5.3.2.</p>
        </div>
        <div className="col">
          <h1 className="font-bold">Links</h1>
          <p>Landing Page</p>
          <p>Home Page</p>
          <p>Watch History Page</p>
        </div>
        <div className="col">
        <h1 className="font-bold">Guides</h1>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
  
        </div>
        <div className="col">
          <h1 className="font-bold">Contact Us</h1>
          <input className='rounded p-2' placeholder='Enter your email here' type="text" /><i className="fa-solid fa-arrow-right text-white ml-2"></i>
         <div className='m-4 flex justify-evenly'>
           <i className="fa-brands fa-twitter"></i>
           <i className="fa-brands fa-instagram"></i>
           <i className="fa-brands fa-facebook"></i>
           <i className="fa-brands fa-linkedin"></i>
           <i className="fa-brands fa-github"></i>
           <i className="fa-solid fa-phone"></i>
         </div>
        </div>
      </div>
      <p className='text-center '>Copyright © June 2024 Batch,E Cart.Build with React Redux.</p>
    </div>
    
  </>
  )
}

export default Footer