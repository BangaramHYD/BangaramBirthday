import { useEffect, useState } from 'react'
import './App.css'
import { Question } from './compounds/Questiontab'
import { Happybirthday } from './compounds/Happybirthday'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { buttonstateatom } from './compounds/Atoms'
import { MusicPlayer } from './compounds/music';

function App() {
 
  const [scrolly,setscrolly] = useState(0)
  // const [buttonstate,setbuttonstate]= useState(false)
  
  function Closebutton(){
    const [buttonstate,setbuttonstate]=useRecoilState(buttonstateatom)
     return <div>
    {buttonstate?<Question  />:<Happybirthday/>}
    <div className='flex items-center ml-[30%]'>

    <MusicPlayer/>
    </div>
  </div>

  }
  // useEffect(()=>{
  //   let lastScrollY = window.scrollY;
    
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setscrolly(window.scrollY)
  //     console.log(currentScrollY)
  //     if(currentScrollY<10){
  //       setCurrentImageIndex(1)
  //     }
  //     if (currentScrollY > lastScrollY) {
  //       // Scrolling down
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages); // Move forward
  //     } else if (currentScrollY < lastScrollY) {
  //       // Scrolling up
  //       setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages); // Move backward
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);  // Clean up event listener
  //   };
  // },[totalImages])


  //new approuch
  
 
  // return <div>
  //    <div style={{ height: "145vh" }}> {/* Add extra height for scrolling */}
  //     {/* Image container with fixed position */}
  //     <div style={{
  //       position: 'fixed',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)',
  //       zIndex: 1,
  //     }}>
  //       <img
  //         style={{
  //           width: '100vw', // Full viewport width
  //           height: 'auto',  // Maintain aspect ratio
  //         }}
  //         src={imagesss[currentImageIndex]} // Set the current image based on scroll
  //         alt={`Image ${currentImageIndex + 1}`}
  //       />
        
  //     </div>
  //   </div>
   
  // </div>

  // return <div>
  //   {buttonstate?<Question  />:<Happybirthday/>}
  //  <div 
  //  style={{
  //   top:'25%',
  //   left:'40%'
  //  }}>
  //   <button onClick={()=>setbuttonstate((pre)=>!pre)}>ClicK me</button>
  //  </div>
  // </div>
  return <div>
    <RecoilRoot>
      <Closebutton/>
    </RecoilRoot>
  </div>
}

export default App
