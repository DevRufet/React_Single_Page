import React from 'react'
import './navsec.css'
function Navsec() {
  return (
    <div className='navsec'>
      <div className='navsec_nav_container'>
        <h3>Financier</h3>
        <div className='items'>
        <a href="">Home</a>
        <a href="">Solutions</a>
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
        </div>
        <div className='menu_btn'>
        <button className='menu'>Menu</button>
        </div>
      </div>
      <div className='navsec_container'>
      <div className='navsec_item1'>
        <h1 >We Help Grow Your Business</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='navsec_item1_btns'>
          <button>Contact Us</button>
          <a href="">Watch the video</a>
        </div>
      </div>
      <div className='navsec_item2'></div>
      </div>
      
    </div>
  )
}

export default Navsec
