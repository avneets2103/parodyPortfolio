import { useState } from "react";
import "./UScreen1.css";
import useWindowDimensions from "../../windowDim/windowDim";
import { mobileTreshold } from "../../../CONSTANTS";

const featureList = [
  "It codes",
  "It debugs",
  "It googles",
  "It tests",
  "It stresses",
  "It bangs head",
  "It sleeps",
];

let currentIndex = 0;

interface sticker {
  message: string;
  top: number;
  left: number;
  angle: string;
  r: string;
  g: string;
  b: string;
  r2: string;
  g2: string;
  b2: string;
}

function UScreen1() {
  const { width} = useWindowDimensions();
  const [stickers, setStickers] = useState<sticker[]>([]);
  function featureShow() {
    let top = Math.random() * (window.innerHeight - 200);
    if (top < 200) {
      top = 200;
    }
    let left = Math.random() * (window.innerWidth - 400);
    if (left < 200) {
      left = 200;
    }
    const angle = Math.random() * 180 - 90;
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    const newSticker: sticker = {
      message: featureList[currentIndex],
      top: top,
      left: left,
      angle: angle.toString(),
      r: r.toString(),
      g: g.toString(),
      b: b.toString(),
      r2: ((r % 128) * 255).toString(),
      g2: ((g % 128) * 255).toString(),
      b2: ((b % 128) * 255).toString(),
    };
    currentIndex = (currentIndex + 1) % featureList.length;
    setStickers([...stickers, newSticker]);
  }
  if (width < mobileTreshold) {
    return (
      <div className="upperS1P">
        <div className="upperS1upperTextP">
          <p>Presenting</p>
          <span>AVNEET SINGH,</span>
          <p>the friendly</p>
          <p>neighborhood DevelopeR !</p>
        </div>
        <div className="upperS1lowerP">
          <div>
            <p>your one step solution for</p>
            <p>
              your <span>404</span> and <span>LIFE</span> errors.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="upperS1">
      <div className="upperS1upperText">
        <p>Presenting</p>
        <span>AVNEET SINGH,</span>
        <p>the friendly</p>
        <p>neighborhood DevelopeR !</p>
      </div>
      <div className="upperS1lower">
        <div>
          <p>your one step solution for</p>
          <p>
            your <span>404</span> and <span>LIFE</span> errors.
          </p>
        </div>
        <div onClick={featureShow}>
          <img src="/icons/ProductFeaturesN.png" alt="features" />
        </div>
        {stickers.map((sticker) => (
          <div
            key={sticker.message}
            className="sticker"
            style={{
              top: `${sticker.top}px`,
              left: sticker.left,
              transform: `rotate(${sticker.angle}deg)`,
              backgroundColor: `rgb(${sticker.r},${sticker.g},${sticker.b})`,
              color: `rgb(${sticker.r2},${sticker.g2},${sticker.b2})`,
            }}
          >
            {sticker.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UScreen1;
