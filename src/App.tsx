import LScreen1 from "./Components/LowerLayer/Screen1/LScreen1";
import LScreen2 from "./Components/LowerLayer/Screen2/LScreen2";
import LScreen3 from "./Components/LowerLayer/Screen3/LScreen3";
import UScreen1 from "./Components/UpperLayer/Screen1/UScreen1";
import UScreen2 from "./Components/UpperLayer/Screen2/UScreen2";
import UScreen4College from "./Components/UpperLayer/Screen4/UScreen4School";
import UScreen5 from "./Components/UpperLayer/Screen5/UScreen5";
import UScreen6 from "./Components/UpperLayer/Screen6/UScreen6";
import "./style.css";

function App() {
  return (
    <div className="SlidesContainer" >
      <div className="LowerSlide">
        <LScreen1 />
      </div>
      <div className="UpperSlide">
        <div className="UScreen1">
          <UScreen1 />
        </div>
        <div className="UScreen2">
          <UScreen2 />
        </div>
        <div className="UScreen4" id="educationID">
          <LScreen2/>
          <UScreen4College/>
        </div>
        <div className="UScreen5" id="projectID">
          <UScreen5/>
        </div>
        <div className="UScreen6" id="skillsID">
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
