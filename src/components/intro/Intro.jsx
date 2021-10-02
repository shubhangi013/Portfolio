import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import 'materialize-css';
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { showCursor: true, strings: ['Programmer','Developer','Content Writer', 'Bibliophile','Tech Enthusiast' ] });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Shubhangi Choudhary</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
