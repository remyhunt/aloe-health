import { useState } from "react";
import circuit from "./assets/circuit.png";
import doctor1 from "./assets/undraw-medical-1.svg";
import texture from "./assets/texture.svg";
import brand1 from "./assets/brand1.webp";
import brand2 from "./assets/brand2.webp";
import brand3 from "./assets/brand3.webp";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0);
  useEffect(() => {
    const sections = document.getElementsByClassName("section");
    const store = document.querySelector(":root");
    const progressBarContainer = document.getElementById("progress-bar-container");
    const progressBars = [];
    const indexes = [];
    const navPositionItems = document.getElementsByClassName("nav-position-item");
    const navItems = Array.from(navPositionItems);
    let currentIndex = 0;
    // store.style.setProperty("--theme-colors", `${colors[currentIndex]}`);
    /* calculate top of section */
    Array.from(sections).forEach((section) => {
      const rect = section.getBoundingClientRect();
      const progressBubble = document.createElement("div");
      const progressBar = document.createElement("div");
      progressBubble.classList.add("progress-bubble");
      progressBar.classList.add("progress-bar");
      let topY = window.pageYOffset + rect.y;
      progressBar.style.height = `${rect.height}px`;
      progressBar.style.top = `${topY}px`;
      progressBubble.style.top = `${topY}px`;
      progressBubble.classList.add("heavenly-glow");
      progressBarContainer.appendChild(progressBubble);
      progressBarContainer.appendChild(progressBar);
      indexes.push(topY);
      progressBars.push(progressBar);
    });

    // console.log(indexes)
    // progressBar.classList.add('fill');
    // store.style.setProperty("--progress", `${indexes[0]}px`);
    // let pcnt = indexes[currentIndex] / progressBarContainer.offsetHeight * 100 ;

    /* add scroll listener */
    window.addEventListener("scroll", (e) => {
      const y = window.scrollY;
      indexes.forEach((index, i) => {
        if (y > index - window.innerHeight + 400) {
          currentIndex = i;
          sections[i].classList.add("isVisible");
          // if(i > 0) {
          progressBars[i].classList.add("progress-visible");
          // }
        }
      });
      // console.log(currentIndex)
      // let pcnt = indexes[currentIndex-1] / progressBarContainer.offsetHeight * 100 ;
      store.style.setProperty("--progress", `${currentIndex}px`);
      // store.style.setProperty("--progress-percent", `${pcnt}%`);
      store.style.setProperty("--currentIndex", `${currentIndex}`);
    });

    loadContent();
    // window.addEventListener("load", () => {
    // });
    
  });
  const loadContent = () => {
    const text = document.getElementsByClassName("slide-text");
      Array.from(text).forEach((item, i) => {
        item.style.animationDelay = `${i * 300}ms`;
        item.classList.add("move");
      });
  }
  return (
    <div className="font-['Circular'] text-[#333] flex flex-col w-full h-full ">
      <div className="hidden md:flex absolute z-[-1] top-0 left-[-10%] w-[80vh] opacity-[15%] ">
        <img className="w-[60%] h-full " src={texture} id="grid" />
      </div>
      {/* intro container */}
      <div className="container z-[100] max-w-[1500px] mx-auto h-full">
        <Nav />
        {/* <!-- intro --> */}
        <div className="flex h-[300px] items-center relative justify-center w-full">
          <div className="absolute bob lg:right-[10%]">
            <img src={doctor1} className="w-[300px] h-auto" />
          </div>
          <div className="text-[2rem]"></div>
        </div>
        {/* <!-- /intro --> */}
      </div>
      {/* /intro container */}

      {/* main */}
      <div className="container max-w-[1500px] mx-auto flex flex-row">
        {/* nav left */}
        <ProgressBar />
        {/* nav left */}
        {/* content right */}

        <div className="w-full h-full flex flex-col">
          {/* intro section */}
          <div>
            {/* title and subtitle */}
            <div className="slide-container ">
              <div className="slide-text">
                <div className=" text-[4rem] leading-tight capitalize lg:text-[5rem] font-[700] ">
                  Patient Journeys, <span>on demand</span>
                </div>
              </div>
            </div>
            <div className="slide-container">
              <div className="slide-text">
                <div className="text-[1.5rem] font-[400] lg:text-[2rem] w-[80%] max-w-[800px] brightness-[67%] leading-[1.5rem] lg:leading-[2.2rem]">
                  Helping care teams stay connected with your patients, from wherever you are.
                </div>
              </div>
            </div>
            {/* /title and subtitle */}

            {/* marketing */}
            <div className="flex flex-col mx-auto mt-[3rem] items-center justify-center">
              <div className="text-[2rem] my-[3rem] flex flex-col items-center ">
                <div>an all-in-one solution</div>
                <div className="text-[1rem] brightness-[65%]">trusted by everyone</div>
              </div>
              <div className="flex flex-col lg:flex-row justify-evenly items-center  w-full">
                <img className="h-[50px] w-[200px]" src={brand1} />
                <img className="h-[50px] w-[200px]" src={brand2} />
                <img className="h-[50px] w-[200px]" src={brand3} />
              </div>
            </div>
            {/* /marketing */}
          </div>
          {/* /intro section */}

          {/* sections[x] */}
          <MainContent />
        </div>
        {/* /content right */}
      </div>

      {/* /main */}
      <Footer />
    </div>
  );
};

export default App;
