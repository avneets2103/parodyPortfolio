import "./UScreen4.css";
import useWindowDimensions from "../../windowDim/windowDim";

function UScreen4College() {
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="collegeP mlzero">
        <div className="innerSpec">
          <div className="rightSpecCP">2025 Onwards</div>
          <div className="leftSpecCP BTechCP">SDE Internship</div>
          <div className="leftSpecCP CSC">Zomato, Delhi</div>
          <div>Upcoming Intern at Zomato</div>
          <div className="rightSpecCP">
            <img src="/icons/nsut.png" alt="nsut" style={{ width: "10vw", minWidth: "200px" }}/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="college mlzero">
      <div className="innerSpec">
        <div className="rightSpecC">2025 Onwards</div>
        <div className="leftSpecC BTechC">SDE Internship</div>
        <div className="leftSpecC CSC">Zomato, Delhi</div>
        <div className="leftSpecC NSUTC">Upcoming Intern</div>
        <div className="rightSpecC">
          <img src="/icons/zomatoLogo.png" alt="nsut" style={{ width: "10vw", minWidth: "200px", marginTop: "20px" }}/>
        </div>
      </div>
    </div>
  );
}

export default UScreen4College;
