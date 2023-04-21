import "../css/kado.css";
import { React, useState,useRef,useEffect } from 'react'
import End from "./end";
import ultah from "../sound/ultah.mp3";
const Kado = () => {
  const [isVisible, setIsVisible] = useState(true);
  const audioRef4 = useRef(null);
  const HandleClick = () => {
    audioRef4.current.pause();
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    let a=audioRef4.current.play();
    if(a!==undefined){
      a.then(_=>{}).catch(error=>{});
    }
  }, []);
  return (
    <>
      {isVisible ? (
        <>
          <div className="birthdayCard">
          <audio ref={audioRef4}>
                <source src={ultah} type="audio/mpeg" />
              </audio>
            <div className="cardFront">
              <div className="front-text">
                <h3 className="happy">HAPPY</h3>
                <h2 className="bday">HAPPY BIRTHDAY</h2>
              </div>
              <div className="wrap-deco">
                <div className="decorations"></div>
                <div className="decorationsTwo"></div>
              </div>
              <div className="wrap-decoTwo">
                <div className="decorations"></div>
                <div className="decorationsThree"></div>
              </div>
              <div className="plate">
                <div className="cake"></div>
                <div className="flame"></div>
              </div>
            </div>

            <div className="cardInside">
              <div className="inside-text">
                <h3 className="happy">HAPPY</h3>
                <h2 className="bday">HAPPY BIRTHDAY</h2>
                <h3 className="toyou">Ayuu</h3>
              </div>
              <div className="wishes">
                <p>Dear Ayuu,</p>
                <p>Happy birthday Ayuu!! Semoga tahun ini semua cita-cita terwujud dan semoga selalu bahagia.
                  <button className="rounded p-1 ring ring-red-600 hover:bg-slate-800 hover:ring-slate-300 hover:text-white" onClick={HandleClick}>klik disini</button>
                </p>
                <p className="name">Maulana Jaelani</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <End/>
      )
      }
    </>
  )
}
export default Kado