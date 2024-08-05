import Name from "../../Name/Name";
import './LScreen3.css'
import useWindowDimensions from "../../windowDim/windowDim";

interface Props {
  colorIndex: number;
}

export default function LScreen3(props: Props) {
    const { colorIndex } = props;
    const { width, height } = useWindowDimensions();
    if (width < height) {
      return (
        <div className="Endscreen">
            <div className="nameScreen1">
                <Name colorMode="black" colorIndex={colorIndex} />
            </div>
            <div className="endLinksP">
                <a href="https://github.com/avneets2103/parodyPortfolio" target="_blank">
                <p>Source code</p>
                <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
                <a href="https://linktr.ee/avneets2103?utm_source=linktree_admin_share" target="_blank">
                    <p>Link tree</p>
                    <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
                <a href="https://drive.google.com/file/d/1TeGSOs_GMwu_MzndoYRht1g-xa3ph_3G/view?usp=sharing" target="_blank">
                    <p>Resume</p>
                    <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
            </div>
        </div>
      )
    }
    return (
        <div className="Endscreen">
            <div className="nameScreen1">
                <Name colorMode="black" colorIndex={colorIndex} />
            </div>
            <div className="endLinks">
                <a href="https://github.com/avneets2103/parodyPortfolio" target="_blank">
                <p>Source code</p>
                <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
                <a href="https://linktr.ee/avneets2103?utm_source=linktree_admin_share" target="_blank">
                    <p>Link tree</p>
                    <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
                <a href="https://drive.google.com/file/d/1j9XQ1kP9dm3Vwa12Aee0twwwnPvfXhju/view?usp=sharing" target="_blank">
                    <p>Resume</p>
                    <img
                    src="/icons/up-right2.png"
                    alt="arrow"
                    width={10}
                    height={10}
                />
                </a>
            </div>
        </div>
    )
}