import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import {FaArrowLeft,FaArrowRight}  from 'react-icons/fa'

import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


const zoomInProperties = {
   indicators: true,
   scale: 1.2,
   duration: 5000,
   transitionDuration: 500,
   infinite: true,

   prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer"  }}>
            <FaArrowLeft size={30}/>
            <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
       
      </div>
   ),
   nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer"}} >
         
            <FaArrowRight size={30}/>
            <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </div>
   ),
}


const ImageScrollbar = ({ data }) => (
   <div className="mt-10">
      <Zoom {...zoomInProperties}>
         {data.map((item) => (
            <div key={item.id} className="flex justify-center w-full h-full  ">
               <Image  placeholder="blur" blurDataURL={item.url} className="w-3/4 object-cover rounded-lg shadow-xl" src={item.url} width={1000}  height={500}  alt='property'/>
            </div>
         ))}
      </Zoom>
   </div>

)
export default ImageScrollbar


