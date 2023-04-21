import React, { useState, useEffect, useRef } from 'react';
import Kado from './kado';
import malam from "../sound/malam.mp3";
import scary from "../sound/scary.mp3";
import useSound from 'use-sound';
import horror from '../foto/horor.jpg';

const Animasi3 = () => {
  const [isVisible, setIsVisible] = useState("block");
  const [isVisible2, setIsVisible2] = useState("none");
  const [vis, Setvis] = useState(true);
  const audioRef = useRef(null);
  const [play2] = useSound(scary);
  const [typing, setTyping] = useState(true);
  const [btnshow, setBtnshow] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(300);
  const dataText = ["Selamat ulang Tahun Ayuu", "Semoga panjang umur sehat selalu", "Dan jangan sering-sering over thingking yaa....."];
  const handleTyping = () => {
    setTyping(true);
    let i = loopNum % dataText.length;
    let fullText = dataText[i];
    setText(
      isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    );
    setTypingSpeed(isDeleting ? 30 : 300);
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
      if (i === 2) {
        setTyping(false);
        setBtnshow(true);
        setTypingSpeed(3000);
      }
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };
  useEffect(() => {
    let a = audioRef.current.play();
    if (a !== undefined) {
      a.then(_ => { }).catch(error => { });
    }
  }, []);
  useEffect(() => {
    let timer;
    if (typing) {
      timer = setTimeout(handleTyping, typingSpeed);
    } else {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [typing, text, isDeleting, loopNum, typingSpeed]);
  const HandleClick = () => {
    audioRef.current.pause();
    setIsVisible("none");
    setIsVisible2("block");
    play2();
    setTimeout(() => {
      setIsVisible2("none");
    }, 3000);
    setTimeout(() => {
      Setvis(false);
    }, 3000);
  };
  return (
    <>
      {
        vis ? (
          <>
            <audio ref={audioRef}>
              <source src={malam} type="audio/mpeg" />
            </audio>
            {/* <audio ref={audioRef2}>
              <source src={scary} type="audio/mpeg" />
            </audio> */}
            <div style={{ position: "fixed", height: "100%", width: "100%", backgroundImage: `url(${horror})`, opacity: 0.9, backgroundColor: "rgba(0, 0, 0, 0.8)", backgroundBlendMode: "multiply", backgroundSize: "cover", display: isVisible }}>

              <div className="center">
                <div className="typewriter">
                  <h1 className='font-horror' style={{ color: "#db0000" }}>{text}</h1>
                  {
                    btnshow ? (
                      <div className="flex justify-center items-center">
                        <button className="bg-black ring ring-white hover:ring hover:ring-red-500 hover:text-red-600 text-white font-bold py-1 px-2 m-2 rounded" onClick={HandleClick}>
                          Next
                        </button>

                      </div>
                    ) : (
                      ""
                    )
                  }
                </div>
              </div>
            </div>

            <div style={{ display: isVisible2 }}>

              <img src="https://img.okezone.com/content/2022/02/25/406/2553153/10-hantu-paling-seram-di-indonesia-pocong-hingga-genderuwo-vi6YthO1Rk.jfif" alt="serem" style={{ position: "fixed", height: "100%", width: "100%" }} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center" style={{ height: "100vh", width: "100vw" }}>
              <Kado />
            </div>
          </>
        )}
    </>
  )
}
export default Animasi3;