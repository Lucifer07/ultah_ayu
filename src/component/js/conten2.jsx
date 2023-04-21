import {React,useEffect,useRef} from 'react'

import ban from '../foto/ban.png';
import ultah2 from '../sound/ultah2.mp3';
import { motion } from 'framer-motion'
import Swiper1 from './swiper1';
import Swiper2 from './swiper2';
export default function Content2() {
    const audioRef7 = useRef(null);
    useEffect(() => {
        let a= audioRef7.current.play();
        if(a!==undefined){
            audioRef7.current.play();
        }
    }, []);

    return(
        <>
        <audio ref={audioRef7}>
           <source src={ultah2} type="audio/mpeg" />
         </audio>
        <motion.div
            className="flex justify-center items-start"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img src={ban} alt="" className='flex justify-center items-center ' />
        </motion.div>
        <Swiper1/>
        <Swiper2/>
    </>
    )
}