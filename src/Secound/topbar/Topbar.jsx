import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Topbar({menuopen,setmenuopen}) {
  return (
    <div className={"App " + (menuopen && "Active")}>
      <div className="flex justify-between px-3  ">
        <div id="Left">
          <div className="flex">
            <a href="#Intro" className="Logo">
              Logo.
            </a>
            <div className="flex px-10 text-lg">
              <div className="itemContainer flex pl-6 pt-5">
                <Person />
                <span>01754629778</span>
              </div>
              <div className="flex pl-6 pt-5">
                <Mail />
                <span>biswasbadhon896@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div id="Right" className="Right ">
          <div className="hamburger pt-3 space-y-1" onClick={()=>{setmenuopen(!menuopen)}} >
          <span className="line1"></span>  
          <span className="line1"></span>  
          <span className="line1"></span>   
          </div>
        </div>
      </div>
    </div>
  );
}
