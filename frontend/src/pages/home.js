
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
import azmatulla from '../images/azmatulla.jpg'
import signature from '../images/signature.png'
import { AboutMe } from './aboutme';
import { Snake } from './games/snake.js'

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

    const [isHidden, setHidden]= useState(false);
    const [i, setI]=useState(0);
    const handleHidden=()=>{
      if(i%2===0){
        setHidden(true)
      }
      else{
        setHidden(false)
      }
      setI(i+1);
    }
    return(
        <div>
            {/* <div className='cursor-round' style={{zIndex:"999"}}><div className='cursor-dot'></div></div> */}
            <div className='main'>
                <div className='mini-main' >
                    <img className='img1' src={book} alt='img'/>
                    <img className='profile-img' src={azmatulla} alt='profiles'/>
                    <h1 className='book-head'>Azmatulla Khan<center><br></br><br></br>About me</center></h1>
                    <AboutMe />
                    <h1 className='book-desc'>I am interested<br></br>in full stack <br></br>development and <br></br> Software Devops</h1>
                    <img className='img2' src={laptop} alt='img'/>
                    <div className='laptop-div'>
                        <WordAnimation />
                    </div>
                    {isHidden && 
                      <div className='hidden' id='hiddenElement'>
                        <Snake />
                      </div>
                    }
                    <img className='img3' src={coffee} alt='img'/>
                    {isHidden && 
                      <div className='coffee-desc' onClick={handleHidden}>
                      <span className='one_1'>E</span>
                      <span className='one_2'>x</span>
                      <span className='one_3'>i</span>
                      <span className='one_4'>t</span>
                      <span className='one_5'>G</span>
                      <span className='one_6'>a</span>
                      <span className='one_7'>m</span>
                      <span className='one_8'>e</span>
                    </div>
                    }
                    {!isHidden && 
                      <div className='coffee-desc' onClick={handleHidden}>
                      <span className='one_1'>P</span>
                      <span className='one_2'>l</span>
                      <span className='one_3'>a</span>
                      <span className='one_4'>y</span>
                      <span className='one_5'>G</span>
                      <span className='one_6'>a</span>
                      <span className='one_7'>m</span>
                      <span className='one_8'>e</span>
                    </div>
                    }
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
                    <img className='img6' src={document} alt='img'/>
                    <h1 className='document-head1'>Want to spend some</h1>
                    <h1 className='document-head2'>time on checking my</h1>
                    <h1 className='document-head3'>projects</h1>
                    <a href='https://github.com/AzmatullaKhan' className='document-takeMe'>Take me</a>
                    <a href='https://moviemate.pythonanywhere.com/' className='document-project1 document-takeMe'>1.  Movies Website</a>
                    <a href='https://github.com/AzmatullaKhan/Tourism-And-Hospitality-Management-ReactProject' className='document-project2 document-takeMe'>2.  Hotel Website</a>
                    <a href='https://github.com/AzmatullaKhan/Portfolio' className='document-project3 document-takeMe'>3.  Portfoli(current)</a>
                    <a href='https://github.com/AzmatullaKhan/Internship_Swecha-Project' className='document-project4 document-takeMe'>4.  Map of India</a>
                    <img src={signature} className='signature' alt='signature'/>
                </div>
            </div>
        </div>
    )
}
