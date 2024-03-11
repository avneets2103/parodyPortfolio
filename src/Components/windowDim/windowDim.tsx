import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

// Extra Small Devices (Phones):
// Range: 0px to 576px

// Small Devices (Tablets):
// Range: 577px to 768px

// Medium Devices (Laptops, Small Desktops):
// Range: 769px to 992px

// Large Devices (Desktops):
// Range: 993px to 1200px

// Extra Large Devices (Large Desktops, TVs):
// Range: 1201px and above