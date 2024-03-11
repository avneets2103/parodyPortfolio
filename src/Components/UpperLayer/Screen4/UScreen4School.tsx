import "./UScreen4.css";
import useWindowDimensions from "../../windowDim/windowDim";
import { mobileTreshold, tabletTreshold } from "../../../CONSTANTS";

function UScreen4College() {
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="collegeP">
        <div className="innerSpec">
          <div className="rightSpecCP">2021-ONGOING</div>
          <div className="leftSpecCP BTechCP">BTech</div>
          <div className="leftSpecCP CSC">Computer Science</div>
          <div className="leftSpecCP NSUTC">NSUT, Delhi</div>
          <div className="leftSpecCP GPAC">8.65 GPA</div>
          <div className="rightSpecCP">
            <img src="/icons/nsut.png" alt="nsut" style={{ width: "10vw", minWidth: "200px" }}/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="college">
      <div className="innerSpec">
        <div className="rightSpecC">2021-ONGOING</div>
        <div className="leftSpecC BTechC">Bachelors of Technology</div>
        <div className="leftSpecC CSC">Computer Science</div>
        <div className="leftSpecC NSUTC">NSUT, Delhi</div>
        <div className="leftSpecC GPAC">8.65 GPA</div>
        <div className="rightSpecC">
          <img src="/icons/nsut.png" alt="nsut" style={{ width: "10vw", minWidth: "200px" }}/>
        </div>
      </div>
    </div>
  );
}

export default UScreen4College;
