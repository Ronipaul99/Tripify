import { Grid, Link } from '@mui/material'
import React from 'react'
import './footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
        <Grid container spacing={1}>
            <Grid item md={5}>
                Want to receive exclusive hotel offers? Subscribe to our newsletter!
            </Grid>
            <Grid item md={6}>
                <input className='footer-input' placeholder='Email address'/>
                <button className='subscribe'>Subscribe</button>
            </Grid>
        </Grid>
        <div className='divider'></div>
        <div className='footer-colums-aera'>
          <Grid container spacing={1}>
            <Grid item container md={7}>
              <Grid item md={4} >
                  <div  className='footer-column-header' xs={12}>
                    About ZipTrip
                  </div>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none" >
                      About Us
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Resources and Policies
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      Trust  &amp; Safety
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      Contact us
                    </Link>
                  </Grid>
                  
              </Grid>
              <Grid item md={4}>
                  <div className='footer-column-header'>
                    Explore
                  </div>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none" >
                      Write a review    
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Hot Deals
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Travel Articles
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Travellers' Choice
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Help Centre
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Privacy policy
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none">
                      Terms of Use
                    </Link>
                  </Grid>
                  
                  
              </Grid>
              <Grid item md={4}>
                  <div className='footer-column-header'>
                    Do Business With Us
                  </div>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      Business Advantage
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#' underline="none" >
                      Owners  &amp; DMO/CVB
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      Sponsored Placements
                    </Link>
                  </Grid>
                  <Grid xs={12} style={{marginTop:'4%'}}>
                    <div className='footer-column-header'>
                      Get The App
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      iPhone App
                    </Link>
                  </Grid>
                  <Grid xs={12}>
                    <Link className='footer-column-item' href='#'  underline="none">
                      Android App
                    </Link>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item container md={4}>
                <Grid item xs={12} style={{textAlign:'center',justifyContent:'center'}}>
                  <Grid xs={12} className="brand-name-primary">
                    ZipTrip
                  </Grid>
                  © Copyright 2022 ziptrip | All rights reserved.
                </Grid>
            </Grid>
          </Grid>
          <Grid container md={12}>
                <Grid item container md={12} style={{textAlign:'center' , marginTop:'3%'}}>
                      <Grid xs={12} style={{textAlign:'left', marginLeft:'0%'}} >
                          <span className='brand-name-secondary'>ZipTrip Sites</span><br/>
                      </Grid>
                      <Grid xs={12} style={{textAlign:'left', marginLeft:'-1%', marginTop:'1%'}} >
                          <Grid xs={4}>
                              <LocationOnIcon/> Pratapadhitya lane , Kolkata - 700126 <br/>
                              <CallIcon/> 3552-2371
                          </Grid>
                      </Grid>
                </Grid>
                <Grid item container md={3} style={{textAlign:'center' , marginTop:'2%' , marginLeft:'-1.7%'}}>
                    <Grid item xs={2}>
                        <Link className='social-media-icon' href='https://www.tripadvisor.in/' target='_blank'>
                          <FacebookRoundedIcon/>
                        </Link> 
                    </Grid>
                    <Grid item xs={2}>
                        <Link className='social-media-icon' href='https://www.trivago.in/' target='_blank'>
                          <TwitterIcon/>
                        </Link>
                        
                    </Grid>
                    <Grid item xs={2}>
                        <Link className='social-media-icon' href='https://www.tripadvisor.in/' target='_blank'>
                          <InstagramIcon/>
                        </Link>
                        
                    </Grid>
                    <Grid item xs={2}>
                        <Link className='social-media-icon' href='https://www.tripadvisor.in/' target='_blank'>
                          <YouTubeIcon/> 
                        </Link>
                        
                    </Grid>
                    <Grid item xs={2}>
                        <Link className='social-media-icon' href='https://www.tripadvisor.in/' target='_blank'>
                          <LinkedInIcon/>
                        </Link>
                    </Grid>
                </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default Footer