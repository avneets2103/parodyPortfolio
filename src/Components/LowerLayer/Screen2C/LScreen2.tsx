import "./LScreen2.css";
import useWindowDimensions from "../../windowDim/windowDim";

function LScreen2() {
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="LScreen2Wrapper">
        <div className="specs">
          <p>Experience</p>
        </div>
        <div className="LScreen2">
          <div className="schoolP">
            <div className="innerSpec">
              <div className="rightSpecP">Feb 2024-Apr 2024</div>
              <div className="leftSpecP BTechP">SDE Internship</div>
              <div className="leftSpecP CS">Mahindra Logistics, Mumbai</div>
              <div className="rightSpec">
                <img
                  src="/icons/mahindraLogisticsLogo.png"
                  alt="nsut"
                  style={{ width: "10vw", minWidth: "200px", marginTop:"20px"}}
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
      <div className="LScreen2">
        <div className="school">
          <div className="innerSpec">
            <div className="rightSpec">Feb 2024-Apr 2024</div>
            <div className="leftSpec BTech">SDE Internship</div>
            <div className="leftSpec CS">Mahindra Logistics, Mumbai</div>
            {/* <div className="leftSpec GPA">Revamped LogiPulse</div> */}
            <div className="whiteText">Completely revamped LogiPulse - Mahindra’s KPI monitoring application for warehouses and Improved average API latency from 520ms to 170ms and decreased page render latency by over 30% with
selective rendering.</div>
            <div className="rightSpec">
              <img src="/icons/mahindraLogisticsLogo.png" alt="nsut" style={{ width: "10vw", minWidth: "200px", marginTop:"10px"}}/>
            </div>
          </div>
        </div>
        <div className="education">
          <p> ~ Experience</p>
        </div>
      </div>
    </div>
  );
}

export default LScreen2;
