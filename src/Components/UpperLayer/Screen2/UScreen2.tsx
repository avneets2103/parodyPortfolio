import './UScreen2.css'

interface Props {
  visible: boolean;
}

function UScreen2(props: Props) {
  const { visible } = props;
  return (
    <>
      {
        visible && <>
          <video autoPlay={true} id="interstellarVid" muted loop className="productVideoComp" controls={false} preload="auto">
            <source src="/interstellar.mp4" type="video/mp4" />
          </video>
        </>
      }
    </>
  );
}

export default UScreen2;
