import React, { useEffect, useState } from "react";
import "./Protfolio.scss";
import Protfoliolist from "../protfolioList/Protfoliolist";
import { feature, web, Design, Ui_Ux } from "../Data.jsx";

export default function Protfolio() {
  const [selected, setselected] = useState("feature");
  const [data, setdata] = useState([]);
  const List = [
    {
      id: "feature",
      title: "Feacture",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "Design",
      title: "Design",
    },
    {
      id: "Ui_Ux",
      title: "Ui/Ux Design",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "feature":
        setdata(feature);
        break;
      case "web":
        setdata(web);
        break;
      case "Design":
        setdata(Design);
        break;
      case "Ui_Ux":
        setdata(Ui_Ux);
        break;

      default:
        setdata(feature);
        break;
    }
  }, [selected]);
  return (
    <div className="Protfolio bg-white" id="Protfolio">
      <h1>Protfolio</h1>
      <ul>
        {List.map((event) => {
          return (
            <Protfoliolist
              title={event.title}
              active={selected === event.id}
              setselected={setselected}
              id={event.id}
            />
          );
        })}
      </ul>
      <div className="container space-x-5">
        {data.map((event) => {
          return (
            <div key={event.id} className="item">
              <img src={event.img1} className="h-32 w-50" alt="" />
              <h3>{event.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
