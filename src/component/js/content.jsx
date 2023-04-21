import { React, useState, useEffect,useRef } from 'react'
import ReactConfetti from 'react-confetti';
import conf from '../sound/conf.mp3';
import Content2 from './conten2';
export default function Content() {
    const audioRef6 = useRef(null);
    const [Dimensi,setDimensi] = useState({width:window.innerWidth,height:window.innerHeight});
    const [Contents,setContents] = useState(false);
    const GetDimensi=()=>{
      setDimensi({width:window.innerWidth,height:window.innerHeight});
    }
    useEffect(()=>{
        let a=audioRef6.current.play();
        if(a!==undefined){
            a.then(_=>{}).catch(error=>{});
          }
      window.addEventListener('resize',GetDimensi);
      setTimeout(()=>{
        setContents(true);
      },3000);
      
      return ()=>{
        window.removeEventListener('resize',GetDimensi);
      }
    },[]);
    return (
       <>
         {Contents ? (
            <Content2/>
         ) : (
            <>
            <audio ref={audioRef6}>
                <source src={conf} type="audio/mpeg" />
              </audio>
            <ReactConfetti width={Dimensi.width} height={Dimensi.height} tweenDuration={1000}/>
            </>
         )}
       </>
    )
}
