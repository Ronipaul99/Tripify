import React from 'react'
import '../Home/home.css'
import Grid from '@mui/material/Grid';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
export default function HomePage() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " id='navbar'>
        <div class="container-fluid">
            <img className='logo-image' src='./brandlogo.png' alt=''/> 
            <ul class="navbar-nav row col-4">
              <li class="nav-item" id='1'>
                <a class="nav-link" href='#'>
                    <Grid  xs={6}>
                      <ModeOutlinedIcon />Review
                    </Grid>
                </a>
              </li>
              <li class="nav-item" id='2'>
                <a class="nav-link" href='#'>
                    <Grid  xs={6}>
                      <FavoriteBorderOutlinedIcon />Trip
                    </Grid>   
                </a>
              </li>
              <li class="nav-item" id='2'>
                <a class="nav-link" href='#'>
                    <Grid  xs={6}>
                      <NotificationsOutlinedIcon />Alerts
                    </Grid>   
                </a>
              </li>
              <li class="nav-item" id='2'>
                <a class="nav-link" href='#'>
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
          <input type="text" className='search-box' id="searchbox" placeholder='where to ?'/>
        </div>
      </div>
      
    </>
  )
}
