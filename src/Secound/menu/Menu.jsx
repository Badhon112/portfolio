import React from "react";
import "./menu.scss";
export default function Menu({ menuopen, setmenuopen }) {
  return (
    <div className={"Menu " + (menuopen && "After")}>
      <ul className="space-y-4 ">
        <li onClick={()=>{
          setmenuopen(false)
        }}>
          <a href="#Intro"  className="hover:text-xl">Home</a>
        </li>
        <li onClick={()=>{
          setmenuopen(false)
        }}>
          <a href="#Protfolio" className="hover:text-xl">Protfolio</a>
        </li>
        <li onClick={()=>{
          setmenuopen(false)
        }}>
          <a href="#Work"  className="hover:text-xl">Work</a>
        </li>
        <li onClick={()=>{
          setmenuopen(false)
        }}>
          <a href="#Testimonials"  className="hover:text-xl">Testimonials</a>
        </li> 
        <li onClick={()=>{
          setmenuopen(false)
        }}>
          <a href="#Contact" className="hover:text-xl"> Contact</a>
        </li>
      </ul>
    </div>
  );
}
