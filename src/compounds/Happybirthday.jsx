import { useEffect, useState } from 'react'

import Image0 from '../assets/Images/1.png'
import Image1 from '../assets/Images/2.png'
import Image2 from '../assets/Images/3.png'
import Image3 from '../assets/Images/4.png'
import Image4 from '../assets/Images/5.png'
import Image5 from '../assets/Images/6.png'
import Image6 from '../assets/Images/7.png'
import Image7 from '../assets/Images/8.png'
import Image8 from '../assets/Images/9.png'
import Image9 from '../assets/Images/10.png'
import Image10 from '../assets/Images/11.png'
import Image11 from '../assets/Images/12.png'
import Image12 from '../assets/Images/13.png'
import Image13 from '../assets/Images/14.png'
import Image14 from '../assets/Images/15.png'
import Image15 from '../assets/Images/16.png'
import Image16 from '../assets/Images/17.png'
import Image17 from '../assets/Images/18.png'
import Image18 from '../assets/Images/19.png'
import Image19 from '../assets/Images/20.png'
import Image20 from '../assets/Images/21.png'
import Image21 from '../assets/Images/22.png'
import Image22 from '../assets/Images/23.png'
import Image23 from '../assets/Images/24.png'
import Image24 from '../assets/Images/25.png'
import Image25 from '../assets/Images/26.png'
import Image26 from '../assets/Images/27.png'
import Image27 from '../assets/Images/28.png'
import Image28 from '../assets/Images/29.png'
import Image29 from '../assets/Images/30.png'
import Image30 from '../assets/Images/31.png'
import Image31 from '../assets/Images/32.png'
import Image32 from '../assets/Images/33.png'
import Image33 from '../assets/Images/34.png'
import Image34 from '../assets/Images/35.png'
import Image35 from '../assets/Images/36.png'
import Image36 from '../assets/Images/37.png'
import Image37 from '../assets/Images/38.png'
import Image38 from '../assets/Images/39.png'
import Image39 from '../assets/Images/40.png'
import Image40 from '../assets/Images/41.png'
import Image41 from '../assets/Images/42.png'
import Image42 from '../assets/Images/43.png'
import Image43 from '../assets/Images/44.png'
import Image44 from '../assets/Images/45.png'
import Image45 from '../assets/Images/46.png'
import Image46 from '../assets/Images/47.png'
import Image47 from '../assets/Images/48.png'
import Image48 from '../assets/Images/49.png'
import Image49 from '../assets/Images/50.png'
import Image50 from '../assets/Images/51.png'
import Image51 from '../assets/Images/52.png'
import Image52 from '../assets/Images/53.png'
import Image53 from '../assets/Images/54.png'
import Image54 from '../assets/Images/55.png'
import Image55 from '../assets/Images/56.png'
import Image56 from '../assets/Images/57.png'
import Image57 from '../assets/Images/58.png'
import Image58 from '../assets/Images/59.png'
import Image59 from '../assets/Images/60.png'
import Image60 from '../assets/Images/61.png'
import Image61 from '../assets/Images/62.png'
import Image62 from '../assets/Images/63.png'
import Image63 from '../assets/Images/64.png'
import Image64 from '../assets/Images/65.png'
import Image65 from '../assets/Images/66.png'
import Image66 from '../assets/Images/67.png'
import Image67 from '../assets/Images/68.png'
import Image68 from '../assets/Images/69.png'
import Image69 from '../assets/Images/70.png'
import Image70 from '../assets/Images/71.png'
import Image71 from '../assets/Images/72.png'
import Image72 from '../assets/Images/73.png'
import Image73 from '../assets/Images/74.png'
import Image74 from '../assets/Images/75.png'
import Image75 from '../assets/Images/76.png'



export const Happybirthday = ()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesss = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,Image16,Image17,Image18,Image19,Image20,Image21,Image22,Image23,Image24,Image25,Image26,Image27,Image28,Image29,Image30,Image31,Image32,Image33,Image34,Image35,Image36,Image37,Image38,Image39,Image40,Image41,Image42,Image43,Image44,Image45,Image46,Image47,Image48,Image49,Image50,Image51,Image52,Image53,Image54,Image55,Image56,Image57,Image58,Image59,Image60,Image61,Image62,Image63,Image64,Image65,Image66,Image67,Image68,Image69,Image70,Image71,Image72,Image73,Image74,Image75]
  const totalImages = imagesss.length;
 
  useEffect(()=>{
    const intervalId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 200); // Change image every 200ms

    return () => clearTimeout(intervalId)
  },[currentImageIndex])
    return <div>
    <div>
   <img
         style={{
           width: '100vw', // Full viewport width
           height:'auto', // Full viewport height
           objectFit: 'cover',
         }}
         src={imagesss[currentImageIndex]} // Set the current image based on scroll
         alt={`Image ${currentImageIndex + 1}`}
       />
   </div>
  {!(currentImageIndex+9<totalImages)? <div
  style={{
   position: 'fixed',
   top:'20%',
   left:'40%'
  }}
  >Happy birthday srija</div>: null}
    <div>
       
    </div>
    </div>
}