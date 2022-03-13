import React, { useState } from "react";
import Topbar from "./topbar/Topbar";
import Intro from "./Intro/Intro";
import Contact from "./contact/Contact";
import Protfolio from "./protfolio/Protfolio";
import Testimonials from "./testimonials/Testimonials";
import Work from "./work/Work";
import "./Index.scss";
import Menu from "./menu/Menu";
export default function Index() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="Index">
      <Topbar menuopen={menuopen} setmenuopen={setmenuopen} />
      <Menu  menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Intro />
        <Protfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
