import React, { useEffect, useState } from 'react'
import '../Home/home.css'
import Grid from '@mui/material/Grid';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
export default function HomePage() {

  const [stickyClass, setStickyClass] = useState('relative');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      windowHeight > 1000 ? setStickyClass('fixed top-0 left-0 z-50 hidden') : setStickyClass('relative');
      windowHeight > 45 ? windowHeight > 600 ? setStickyClass('fixed top-0 left-0 z-50 hidden') : setStickyClass('fixed top-0 left-0 z-50 sticky') : setStickyClass('relative');
      // windowHeight > 25 ? document.getElementById('navbar').classList.add('sticky')
      // :document.getElementById('navbar').classList.remove('sticky');
      
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${stickyClass}`} id='navbar'>
        <div className="container-fluid">
            <img className='logo-image' src='./brandlogo.png' alt=''/> 
            <ul className="navbar-nav row col-4">
              <li className="nav-item" id='1'>
                <a className="nav-link" href='#'>
                    <Grid  xs={6}>
                      <ModeOutlinedIcon />Review
                    </Grid>
                </a>
              </li>
              <li className="nav-item" id='2'>
                <a className="nav-link" href='#'>
                    <Grid  xs={6}>
                      <FavoriteBorderOutlinedIcon />Trip
                    </Grid>   
                </a>
              </li>
              <li className="nav-item" id='2'>
                <a className="nav-link" href='#'>
                    <Grid  xs={6}>
                      <NotificationsOutlinedIcon />Alerts
                    </Grid>   
                </a>
              </li>
              <li className="nav-item" id='2'>
                <a className="nav-link" href='#'>
                  <Avatar alt="Remy Sharp" src="./profilepic.jpg" style={{position:'fix',bottom:'9px'}} /> 
                </a>
              </li>
            </ul>
          </div>
      </nav>
      <div className='home-body'>      
        <div className='row'>
          <div className='a col-6'>
              
              <div className='banner-text'>
                <div >
                  Zip your bag , <br/> We are here to manage all your trip.
                </div>  
              </div> 
          </div>
          <div className='col-6'>
              <img className='banner-image' src='./Banner-tripify.png' alt=''/>              
          </div>
        </div>

        <div className='search'>
          <label className='search-text'>
            <Grid  xs={6}>
                <SearchIcon style={{color:'black'}}/>   Where to ?
            </Grid>
          </label>
          <input type="text" className='search-box' id="searchbox"  />
        </div>
      </div>
      
    </>
  )
}
