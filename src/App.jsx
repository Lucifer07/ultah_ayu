import { React, useState} from 'react'
import './App.css';
import SplashScreen from './component/js/SplashScreen';
import "./component/css/first.css";


function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    {!isVisible ? (
      <div className="first">
      <div className="center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsVisible(!isVisible)}>
              Play
          </button>
      </div>
    </div>
    ) :<SplashScreen/>}
    </>

  );
}

export default App;