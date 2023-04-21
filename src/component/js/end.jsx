import {React,useState,useEffect,useRef} from 'react'
import Fire from './firework';
import Content  from './content';
import firesound from '../sound/fire.mp3';
import bg from '../foto/bg.webp';
function End() {
  const audioRef5 = useRef(null);
  const [Contents, setContents] = useState(true);
  useEffect(() => {
      
      let a=audioRef5.current.play();
      if(a!==undefined){
        a.then(_=>{}).catch(error=>{});
      }
      setTimeout(() => {
          setContents(false);
      }, 5000);
  }, [])
  return (
   <>
   <div style={{ position: "fixed", height: "100%", width: "100%", backgroundImage: `url(${bg})`,opacity:0.9, backgroundSize: "cover" }}>
      {Contents ? (
       <>
       <audio ref={audioRef5}>
            <source src={firesound} type="audio/mpeg" />
        </audio>
      <Fire/>
       </>
      ) : (
        <Content/>
      )}
   </div>
   </>
  );
}

export default End;
