import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='row'>
            <div className='col-5'>
                Want to receive exclusive hotel offers? Subscribe to our newsletter!
            </div>
            <div className='col-6 row'>
                <input className='footer-input' placeholder='Email address'/>
                <button className='subscribe'>Subscribe</button>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  )
}

export default Footer