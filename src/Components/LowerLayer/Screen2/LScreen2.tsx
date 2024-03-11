import "./LScreen2.css";
import useWindowDimensions from "../../windowDim/windowDim";
import { mobileTreshold, tabletTreshold } from "../../../CONSTANTS";

function LScreen2() {
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="LScreen2Wrapper">
        <div className="specs">
          <p>Education</p>
        </div>
        <div className="LScreen2">
          <div className="schoolP">
            <div className="innerSpec">
              <div className="rightSpecP">2007-2021</div>
              <div className="leftSpecP BTechP">CBSE</div>
              <div className="leftSpecP CS">JIS, Delhi</div>
              <div className="leftSpecP GPA">95.5% 12th</div>
              <div className="rightSpec">
                <img
                  src="/icons/jis.png"
                  alt="nsut"
                  style={{ width: "10vw", minWidth: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="LScreen2Wrapper">
      <div className="specs">
        <p>Specifications</p>
      </div>
      <div className="LScreen2">
        <div className="education">
          <p>Education:</p>
        </div>
        <div className="school">
          <div className="innerSpec">
            <div className="rightSpec">2007-2021</div>
            <div className="leftSpec BTech">Schooling CBSE</div>
            <div className="leftSpec CS">JIS, Delhi</div>
            <div className="leftSpec GPA">95.5% 12th</div>
            <div className="rightSpec">
              <img src="/icons/jis.png" alt="nsut"style={{ width: "10vw", minWidth: "200px" }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LScreen2;
