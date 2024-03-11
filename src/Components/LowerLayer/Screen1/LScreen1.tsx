import "./LScreen1.css";
import Name from "../../Name/Name";
import useWindowDimensions from "../../windowDim/windowDim";
import { mobileTreshold, tabletTreshold } from "../../../CONSTANTS";

function LScreen1() {
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="lowerS1P">
        <div className="screen1TopP">
          <img
            src="/icons/Logo.png"
            alt="logo"
            width={80}
            height={80}
            className="mainLogo"
          />
        </div>
        <div className="nameScreen1">
          <Name colorMode="orange" />
        </div>
      </div>
    );
  }
  return (
    <div className="lowerS1">
      <div className="screen1Top">
        <img
          src="/icons/Logo.png"
          alt="logo"
          width={80}
          height={80}
          className="mainLogo"
        />
        <div className="screen1LinkBox">
          <div className="screen1LinkBoxIn screen1LinkBoxLeft">
            <hr />
            <a href="https://github.com/avneets2103" target="blank">
              <p>github</p>
              <img
                src="/icons/up-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </a>
            <hr />
            <a href="https://www.linkedin.com/in/avneets2103/" target="blank">
              <p>linkedin</p>
              <img
                src="/icons/up-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="screen1LinkBoxIn screen1LinkBoxRight">
            <hr />
            <a href="#educationID">
              <p>education</p>
              <img
                src="/icons/up-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </a>
            <hr />
            <a href="#projectID">
              <p>project</p>
              <img
                src="/icons/up-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="nameScreen1">
        <Name colorMode="orange" />
      </div>
    </div>
  );
}

export default LScreen1;
