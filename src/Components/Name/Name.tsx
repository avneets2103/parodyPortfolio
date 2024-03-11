import "./Name.css";
import useWindowDimensions from "../windowDim/windowDim";
interface Props {
  colorMode: string;
}

function Name(props: Props) {
  const { colorMode } = props;
  const { width } = useWindowDimensions();
  if (width < 576) {
    return (
      <div className="nameComponent">
        {colorMode == "black" ? (
          <img className="orangeNameP" src="/icons/nameOrange.png" alt="arrow" />
        ) : (
          <img className="blackNameP" src="/icons/name.png" alt="arrow" />
        )}
      </div>
    );
  }
  return (
    <div className="nameComponent">
      {colorMode == "black" ? (
        <img className="orangeName" src="/icons/nameOrange.png" alt="arrow" />
      ) : (
        <img className="blackName" src="/icons/name.png" alt="arrow" />
      )}
    </div>
  );
}

export default Name;
