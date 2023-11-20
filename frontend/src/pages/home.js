
import React, { useEffect, useState } from 'react';
import './z.css'
import coffee from '../images/coffee.png'
import book from '../images/book.png'
import document from '../images/document.png'
import laptop from '../images/laptop.png'
import mobile from '../images/mobile.png'
import pen from '../images/pen.png'
import instagram from '../images/instagram.jpg'
import linkedIn from '../images/linkedIn.png'
import github from '../images/github.png'
import mail from '../images/mail.png'



export const Home=()=>{

  const words = [
    'Welcome to my Portfolio.',
    'I am Azmatulla.',
    "Currently studying my Bachelor's at KL University.",
    'Interested in Full stack development.',
    'Passing out at 2026.',
  ];
  
  const WordAnimation = () => {
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const skip_delay = 15;
    const speed = 90; 
    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards) {
          if (offset >= words[wordIndex].length) {
            setSkipCount((prevCount) => prevCount + 1);
            if (skipCount === skip_delay) {
              setForwards(false);
              setSkipCount(0);
            }
          }
        } else {
          if (offset === 0) {
            setForwards(true);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
  
        if (skipCount === 0) {
          setOffset((prevOffset) => (forwards ? prevOffset + 1 : prevOffset - 1));
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [forwards, offset, skipCount, wordIndex]);
  
    const part = words[wordIndex].substr(0, offset);
  
    return <div className="laptop-div-mini"><h1>{part}</h1></div>;
  };
  
      
    const handleBookClick=()=>{
        console.log('clicked')
    }
    
    return(
        <div>
            {/* <div className='cursor-round' style={{zIndex:"999"}}><div className='cursor-dot'></div></div> */}
            <div className='main'>
                <div className='mini-main' >
                    <img className='img1' src={book} alt='img'/>
                    <h1 className='book-head' onClick={handleBookClick}>Azmatulla Khan<center><br></br><br></br>About me</center></h1>
                    <h1 className='book-desc'>I am interested<br></br>in full stack <br></br>development and <br></br> Software Devops</h1>
                    <img className='img2' src={laptop} alt='img'/>
                    <div className='laptop-div'>
                        <WordAnimation />
                    </div>
                    <img className='img3' src={coffee} alt='img'/>
                    <img className='img4' src={pen} alt='img'/>
                    <img className='img5' src={mobile} alt='img'/>
                    <h1 className='mobile-head'>Contact Details</h1>
                    <div style={{display:"flex"}}>
                        <img src={instagram} className='image-instagram' alt='insta'/>
                        <a href='https://www.instagram.com/01__suspect/' className='instagram'>Instagram</a>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src={linkedIn} className='image-linkedIn' alt='linkedIn'/>
                        <a href='https://www.linkedin.com/in/azmatulla-khan-259338246/' className='linkedIn'>LinkedIn</a>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src={github} className='image-github' alt='github'/>
                        <a href='https://github.com/AzmatullaKhan' className='github'>GitHub</a>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src={mail} className='image-mail' alt='mail'/>
                        <h1 className='mail'>kk258786@gmail<br></br>.com</h1>
                    </div>
                    <img className='img6' src={document} alt='img'/>
                </div>
            </div>
        </div>
    )
}