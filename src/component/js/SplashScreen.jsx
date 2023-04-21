import { React, useState, useRef, useEffect } from "react";
import "../css/SplashScreen.css";
import Animasi3 from "./animasi3";
import netflixsound from "../sound/netflix.mp3";
const SplashScreen = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const audioRef = useRef(null);
  const handleAnimationEnd = () => {
    audioRef.current.pause();
    setShowFirstDiv(false);
  };
  useEffect(() => {
    let a= audioRef.current.play();
    if(a!==undefined){
      audioRef.current.play();
    }
  }, []);
  
  return (
    <div>
      {showFirstDiv && (

        <div onAnimationEnd={handleAnimationEnd}>
          <audio ref={audioRef}>
            <source src={netflixsound} type="audio/mpeg" />
          </audio>
          <div id="container">
            <div className="netflixintro" letter="N">
              <div className="helper-1">
                <div className="effect-brush">
                  <span className="fur-31"></span>
                  <span className="fur-30"></span>
                  <span className="fur-29"></span>
                  <span className="fur-28"></span>
                  <span className="fur-27"></span>
                  <span className="fur-26"></span>
                  <span className="fur-25"></span>
                  <span className="fur-24"></span>
                  <span className="fur-23"></span>
                  <span className="fur-22"></span>
                  <span className="fur-21"></span>
                  <span className="fur-20"></span>
                  <span className="fur-19"></span>
                  <span className="fur-18"></span>
                  <span className="fur-17"></span>
                  <span className="fur-16"></span>
                  <span className="fur-15"></span>
                  <span className="fur-14"></span>
                  <span className="fur-13"></span>
                  <span className="fur-12"></span>
                  <span className="fur-11"></span>
                  <span className="fur-10"></span>
                  <span className="fur-9"></span>
                  <span className="fur-8"></span>
                  <span className="fur-7"></span>
                  <span className="fur-6"></span>
                  <span className="fur-5"></span>
                  <span className="fur-4"></span>
                  <span className="fur-3"></span>
                  <span className="fur-2"></span>
                  <span className="fur-1"></span>
                </div>
                <div className="effect-lumieres">
                  <span className="lamp-1"></span>
                  <span className="lamp-2"></span>
                  <span className="lamp-3"></span>
                  <span className="lamp-4"></span>
                  <span className="lamp-5"></span>
                  <span className="lamp-6"></span>
                  <span className="lamp-7"></span>
                  <span className="lamp-8"></span>
                  <span className="lamp-9"></span>
                  <span className="lamp-10"></span>
                  <span className="lamp-11"></span>
                  <span className="lamp-12"></span>
                  <span className="lamp-13"></span>
                  <span className="lamp-14"></span>
                  <span className="lamp-15"></span>
                  <span className="lamp-16"></span>
                  <span className="lamp-17"></span>
                  <span className="lamp-18"></span>
                  <span className="lamp-19"></span>
                  <span className="lamp-20"></span>
                  <span className="lamp-21"></span>
                  <span className="lamp-22"></span>
                  <span className="lamp-23"></span>
                  <span className="lamp-24"></span>
                  <span className="lamp-25"></span>
                  <span className="lamp-26"></span>
                  <span className="lamp-27"></span>
                  <span className="lamp-28"></span>
                </div>
              </div>
              <div className="helper-2">
                <div className="effect-brush">
                  <span className="fur-31"></span>
                  <span className="fur-30"></span>
                  <span className="fur-29"></span>
                  <span className="fur-28"></span>
                  <span className="fur-27"></span>
                  <span className="fur-26"></span>
                  <span className="fur-25"></span>
                  <span className="fur-24"></span>
                  <span className="fur-23"></span>
                  <span className="fur-22"></span>
                  <span className="fur-21"></span>
                  <span className="fur-20"></span>
                  <span className="fur-19"></span>
                  <span className="fur-18"></span>
                  <span className="fur-17"></span>
                  <span className="fur-16"></span>
                  <span className="fur-15"></span>
                  <span className="fur-14"></span>
                  <span className="fur-13"></span>
                  <span className="fur-12"></span>
                  <span className="fur-11"></span>
                  <span className="fur-10"></span>
                  <span className="fur-9"></span>
                  <span className="fur-8"></span>
                  <span className="fur-7"></span>
                  <span className="fur-6"></span>
                  <span className="fur-5"></span>
                  <span className="fur-4"></span>
                  <span className="fur-3"></span>
                  <span className="fur-2"></span>
                  <span className="fur-1"></span>
                </div>
              </div>
              <div className="helper-3">
                <div className="effect-brush">
                  <span className="fur-31"></span>
                  <span className="fur-30"></span>
                  <span className="fur-29"></span>
                  <span className="fur-28"></span>
                  <span className="fur-27"></span>
                  <span className="fur-26"></span>
                  <span className="fur-25"></span>
                  <span className="fur-24"></span>
                  <span className="fur-23"></span>
                  <span className="fur-22"></span>
                  <span className="fur-21"></span>
                  <span className="fur-20"></span>
                  <span className="fur-19"></span>
                  <span className="fur-18"></span>
                  <span className="fur-17"></span>
                  <span className="fur-16"></span>
                  <span className="fur-15"></span>
                  <span className="fur-14"></span>
                  <span className="fur-13"></span>
                  <span className="fur-12"></span>
                  <span className="fur-11"></span>
                  <span className="fur-10"></span>
                  <span className="fur-9"></span>
                  <span className="fur-8"></span>
                  <span className="fur-7"></span>
                  <span className="fur-6"></span>
                  <span className="fur-5"></span>
                  <span className="fur-4"></span>
                  <span className="fur-3"></span>
                  <span className="fur-2"></span>
                  <span className="fur-1"></span>
                </div>
              </div>
              <div className="helper-4">
                <div className="effect-brush">
                  <span className="fur-31"></span>
                  <span className="fur-30"></span>
                  <span className="fur-29"></span>
                  <span className="fur-28"></span>
                  <span className="fur-27"></span>
                  <span className="fur-26"></span>
                  <span className="fur-25"></span>
                  <span className="fur-24"></span>
                  <span className="fur-23"></span>
                  <span className="fur-22"></span>
                  <span className="fur-21"></span>
                  <span className="fur-20"></span>
                  <span className="fur-19"></span>
                  <span className="fur-18"></span>
                  <span className="fur-17"></span>
                  <span className="fur-16"></span>
                  <span className="fur-15"></span>
                  <span className="fur-14"></span>
                  <span className="fur-13"></span>
                  <span className="fur-12"></span>
                  <span className="fur-11"></span>
                  <span className="fur-10"></span>
                  <span className="fur-9"></span>
                  <span className="fur-8"></span>
                  <span className="fur-7"></span>
                  <span className="fur-6"></span>
                  <span className="fur-5"></span>
                  <span className="fur-4"></span>
                  <span className="fur-3"></span>
                  <span className="fur-2"></span>
                  <span className="fur-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showFirstDiv && (
        <Animasi3 />
      )}
    </div>
  );
};

export default SplashScreen;
