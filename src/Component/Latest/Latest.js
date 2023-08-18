import React from 'react';
import "./Latest.css";
import Img1 from "../../Image/Image1.jpg";
import Img5 from "../../Image/Image5.jpg";
import Img6 from "../../Image/Image6.jpg";

function Latest() {
  return (
    <div className='mainContainer'>
        <h3>The Latest</h3>

        <div className='cardContainer'>
            <div className='card'>
                <div className='cardImg'>
                    <img src={Img1}  alt='firstImg' />
                </div>
                <div className='cardContent'>
                    <h2>Joshua Tree <br/> Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <span><b>Travel</b>/ August 21 2023</span>
                </div>
            </div>
            <div className='card'>
                <div className='cardImg'>
                    <img src={Img5}  alt='firstImg' />
                </div>
                <div className='cardContent'>
                    <h2>Joshua Tree <br/> Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <span><b>Travel</b>/ August 21 2023</span>
                </div>
            </div>
            <div className='card'>
                <div className='cardImg'>
                    <img src={Img6}  alt='firstImg' />
                </div>
                <div className='cardContent'>
                    <h2>Joshua Tree <br/> Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <span><b>Travel</b>/ August 21 2023</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest;