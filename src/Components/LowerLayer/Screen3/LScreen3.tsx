import Name from "../../Name/Name";
import './LScreen3.css'

export default function LScreen3() {
    return (
        <div className="Endscreen">
            <div className="nameScreen1">
                <Name colorMode="black" />
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
                <a href="https://drive.google.com/file/d/1xRMhLV0Nu6336UBwHtFIpIoGg9O8dJ1o/view?usp=sharing" target="_blank">
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