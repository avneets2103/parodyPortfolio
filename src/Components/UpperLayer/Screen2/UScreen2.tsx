import './UScreen2.css'

function UScreen2() {
  return (
    <>
      <video autoPlay={true} id="interstellarVid" muted loop className="productVideoComp" controls={false} preload="auto">
        <source src="/interstellar.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default UScreen2;
