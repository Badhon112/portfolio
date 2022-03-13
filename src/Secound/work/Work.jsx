import React, { useState } from "react";
import "./Work.scss";
export default function Work() {
  const [currentSlider, setcurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      icon: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus  ",
      img: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
    },
    {
      id: 2,
      icon: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Mobil",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus  ",
      img: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
    },
    {
      id: 3,
      icon: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Anything",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus  ",
      img: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
    },
  ];
  const handelClick = (e) => {
    e === "left"
      ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setcurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="Work bg-white" id="Work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((event) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftcontainer">
                    <div className="imgcontainer">
                      <img src={event.icon} alt="" />
                    </div>
                    <p className="">{event.title}</p>
                    <p>{event.desc}</p>
                    <span>Project</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={event.img}
                    alt=""
                    className="h-80 rounded-lg px-3 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="ImgCon/Arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handelClick("left")}
      />
      <img
        src="ImgCon/Arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handelClick("right")}
      />
    </div>
  );
}
