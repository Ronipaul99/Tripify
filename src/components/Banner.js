import React from 'react'
import SpaceTour from '../asset/lottieFiles/space-tour.json';
import GreetingLottie from "../containers/DisplayLottie";

import { Fade } from 'react-reveal';
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import '../ComponentCSS/Banner.css'
export default function Banner() {
    const myStyle={
        backgroundImage: 
        "url('./illustrator.png')",
        height:"500px",
        backgroundSize: 'cover',
        position:'avsolute'
    };
  return (
      <>
        <div  className="spacer layer1 Banner row">
          
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <div className='message col-sm-5'>  
              <img src='./logo.png' style={{width:"200px", height:"200px" , marginBottom:"-5%"}}/>
                <div> Plan your Trip </div>
                <p className='sub-text'>Manage all your booking at one place</p>
            </div>
            <div className='svg-lottie'>
              <GreetingLottie animationData={SpaceTour}/>  
            </div>  
        </div>
        <div className='spacer2 layer2'></div>
      </>   
  )
}
