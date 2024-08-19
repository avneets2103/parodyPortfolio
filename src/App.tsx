import ColorPalette from "./Components/ColorPallete";
import LScreen1 from "./Components/LowerLayer/Screen1/LScreen1";
import LScreen2 from "./Components/LowerLayer/Screen2/LScreen2";
import LScreen2C from "./Components/LowerLayer/Screen2C/LScreen2";
import LScreen3 from "./Components/LowerLayer/Screen3/LScreen3";
import UScreen1 from "./Components/UpperLayer/Screen1/UScreen1";
import UScreen2 from "./Components/UpperLayer/Screen2/UScreen2";
import UScreen4College from "./Components/UpperLayer/Screen4/UScreen4School";
import UScreen4CollegeC from "./Components/UpperLayer/Screen4C/UScreen4School";
import UScreen5 from "./Components/UpperLayer/Screen5/UScreen5";
import UScreen6 from "./Components/UpperLayer/Screen6/UScreen6";
import useWindowDimensions from "./Components/windowDim/windowDim";
import useScrollSnap from "react-use-scroll-snap";
import { useState, useRef } from 'react';
import "./style.css";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { width, height } = useWindowDimensions();
  const [primaryColor, setPrimaryColor] = useState<number>(0);
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 0, isDirectionEnabled: false});
  // phone size
  if(width<height){
    return (
      <>
      <div className="SlidesContainer">
        <div className="LowerSlide">
          <LScreen1 />
        </div>
        <div className="UpperSlide">
          <div className="Uscreen UScreen1">
            <UScreen1 colorIndex={primaryColor}/>
          </div>
          <div className="Uscreen UScreen2">
            <UScreen2 />
          </div>
          <div className="Uscreen UScreen4" id="educationID">
            <LScreen2/>
            <UScreen4College/>
          </div>
          <div className="Uscreen UScreen5" id="projectID">
            <UScreen5/>
          </div>
          <div className="LowerSlide2">
            <LScreen3 colorIndex={primaryColor} />
          </div>
        </div>
      </div>
      <Analytics />
      </>
    );
  }
  // full size
  return (
    <>
    <div className="SlidesContainer">
      <ColorPalette colorIndex={primaryColor} setColorIndex={setPrimaryColor} />
      <div className="LowerSlide">
        <LScreen1 />
      </div>
      <div className="UpperSlide" ref={scrollRef}>
        <div className="Uscreen UScreen1">
          <UScreen1 colorIndex={primaryColor} />
        </div>
        <div className="Uscreen UScreen2">
          <UScreen2 />
        </div>
        <div className="Uscreen UScreen4" id="educationID">
          <LScreen2/>
          <UScreen4College/>
        </div>
        <div className="Uscreen UScreen4" id="educationID">
          <LScreen2C/>
          <UScreen4CollegeC/>
        </div>
        <div className="Uscreen UScreen5" id="projectID">
          <UScreen5/>
        </div>
        <div className="Uscreen UScreen6" id="skillsID">
          <UScreen6/>
        </div>
        <div className="LowerSlide2">
          <LScreen3 colorIndex={primaryColor}/>
        </div>
      </div>
    </div>
    <Analytics />
    </>
  );
}

export default App;
