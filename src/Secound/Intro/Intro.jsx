import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Intro.scss";
export default function Intro() {
  const first = useRef();
  useEffect(() => {
    init(first.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:120,
      strings: [" Developer", " Designer", " Content Creator", " Ui/Ux Designer",],
    });
  }, []);
  return (
    <div className="Intro" id="Intro">
      <div className="left ">
        <div className="Imagcontainer rounded-full  bg-slate-500">
          <img src="ImgCon/Badhon.jpg" alt="" className=" rounded-lg" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper pl-20 flex justify-center ">
          <h1 className="text-3xl mt-3 from-neutral-900">Hi There ,I</h1>
          <h1 className=" text-3xl font-bold">Badhon Biswas</h1>
          <h1 className="text-3xl font-bold">
            Working On:
            <span className="font-mono  text-red-600" ref={first}></span>
          </h1>
        </div>
        <a href="#Protfolio" className="">
          <img src="ImgCon/Down1.png" alt="" />
        </a>
      </div>
    </div>
  );
}
