import LScreen1 from "./Components/LowerLayer/Screen1/LScreen1";
import LScreen2 from "./Components/LowerLayer/Screen2/LScreen2";
import LScreen3 from "./Components/LowerLayer/Screen3/LScreen3";
import UScreen1 from "./Components/UpperLayer/Screen1/UScreen1";
import UScreen2 from "./Components/UpperLayer/Screen2/UScreen2";
import UScreen4College from "./Components/UpperLayer/Screen4/UScreen4School";
import UScreen5 from "./Components/UpperLayer/Screen5/UScreen5";
import UScreen6 from "./Components/UpperLayer/Screen6/UScreen6";
import useWindowDimensions from "./Components/windowDim/windowDim";
import "./style.css";

function App() {
  const { width, height } = useWindowDimensions();
  // phone size
  if(width<height){
    return (
      <div className="SlidesContainer" >
        <div className="LowerSlide">
          <LScreen1 />
        </div>
        <div className="UpperSlide">
          <div className="Uscreen UScreen1">
            <UScreen1 />
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
            <LScreen3 />
          </div>
        </div>
      </div>
    );
  }
  // full size
  return (
    <div className="SlidesContainer" >
      <div className="LowerSlide">
        <LScreen1 />
      </div>
      <div className="UpperSlide">
        <div className="Uscreen UScreen1">
          <UScreen1 />
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
        <div className="Uscreen UScreen6" id="skillsID">
          <UScreen6/>
        </div>
        <div className="LowerSlide2">
          <LScreen3 />
        </div>
      </div>
    </div>
  );
}

export default App;
