import "./Name.css";
import useWindowDimensions from "../windowDim/windowDim";
interface Props {
  colorMode: string;
  colorIndex: number;
}

function Name(props: Props) {
  const { colorMode, colorIndex } = props;
  const { width, height } = useWindowDimensions();
  if (width < height) {
    return (
      <div className="nameComponent">
        {colorMode == "black" ? (
          <img className="orangeNameP" src={`/icons/Name${colorIndex}.png`} alt="arrow" />
        ) : (
          <img className="blackNameP" src="/icons/name.png" alt="arrow" />
        )}
      </div>
    );
  }
  return (
    <div className="nameComponent">
      {colorMode == "black" ? (
        <img className="orangeNameP" src={`/icons/Name${colorIndex}.png`} alt="arrow" />
      ) : (
        <img className="blackName" src="/icons/name.png" alt="arrow" />
      )}
    </div>
  );
}

export default Name;