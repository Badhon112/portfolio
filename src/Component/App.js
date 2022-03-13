import React from "react";
import img1 from "./Image/11.jpg";
import img2 from "./Image/12.jpg";

export default function App() {
  return (
    <body>
      <header className=" pb-12 rounded-b-xl  bg-gradient-to-r from-blue-400 to-cyan-400 ">
        <div className="flex justify-around py-4 ">
          <div>Logo</div>
          <div className="flex space-x-5">
            <button>HOME</button>
            <button>ABOUT</button>
            <button>CONTACT</button>
          </div>
        </div>
        <div className="flex justify-around py-14">
          <img src={img1} alt="" srcset="" className="w-20 h-20 rounded-lg" />
          <img src={img2} alt="" srcset="" className="w-20 h-20 rounded-lg" />
        </div>
        <div className="justify-center px-96">
          <div>
            <p className="text-6xl text-center">We Are Mern Developer</p>
            <p className=" text-center">
              A Team of passionate designers and developer from Bangladesh
            </p>
          </div>
          <div className="px-80 pt-4 ">
            <button className="px-6 py-2 bg-white rounded-2xl ">
              Click ME
            </button>
          </div>
        </div>
        <div className="flex justify-around">
          <img src={img1} alt="" srcset="" className="w-40 h-40 rounded-lg" />
          <img src={img2} alt="" srcset="" className="w-20 h-20 rounded-lg" />
        </div>
      </header>
      <main className="text-center pt-32 text-3xl font-sans bg-gradient-to-r from-cyan-400 to-blue-400 rounded-t-lg">
        <div className="justify-center pb-20">
          <p>What we Do</p>
        </div>
        <div className="px-96">
          <div className="flex">
            <div className="  flex rounded-lg justify-between  space-x-20">
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="flex pt-10">
            <div className="  flex rounded-lg justify-between  space-x-20">
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" pt-5 h-52 w-52">
                <img
                  src={img1}
                  alt=""
                  srcset=""
                  className=" h-14  rounded-lg px-16 "
                />
                <p> ui</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="min-h-screen bg-slate-200">
        <p className="text-center  text-4xl pt-14 pb-14">Our Latest Work</p>
        <div className="h-56 px-72 flex justify-center">
          <div className="bg-white p-10">
            <p className="text-center font-bold text-2xl">
              Redesigning Crisp.im
            </p>
            <p className="text-center">web design ,Illestator</p>
            <div className="p-8">
              <button className="px-4 py-2 bg-slate-300 rounded-full">
                Click ME
              </button>
            </div>
          </div>
          <div className="bg-green-600">
            <img
              src={img2}
              alt=""
              srcset=""
              className="w-full h-56 rounded-lg"
            />
          </div>
        </div>
        <div className="h-64 px-72 flex justify-center pt-8">
          <div className="bg-green-600">
            <img
              src={img2}
              alt=""
              srcset=""
              className="w-full h-56 rounded-lg"
            />
          </div>
          <div className="bg-white p-10">
            <p className="text-center font-bold text-2xl">
              Redesigning Crisp.im
            </p>
            <p className="text-center">web design ,Illestator</p>
            <div className="p-8">
              <button className="px-4 py-2 bg-slate-300 rounded-full">
                Click ME
              </button>
            </div>
          </div>
        </div>
        <div className="h-56 px-72 flex justify-center pt-8">
          <div className="bg-white p-10">
            <p className="text-center font-bold text-2xl">
              Redesigning Crisp.im
            </p>
            <p className="text-center">web design ,Illestator</p>
            <div className="p-8">
              <button className="px-4 py-2 bg-slate-300 rounded-full">
                Click ME
              </button>
            </div>
          </div>
          <div className="bg-green-600">
            <img
              src={img2}
              alt=""
              srcset=""
              className="w-full h-56 rounded-lg"
            />
          </div>
        </div>
      </footer>
    </body>
  );
}
