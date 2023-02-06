import { useEffect, useState } from "react";
import "./Nav.css";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [navItemInFocus, setNavItemInFocus] = useState(0);
  const [accordionVisible, setAccordionVisible] = useState(false);
  const navItemContent = [
    {
      name: "Product",
      list: ["About Us", "Services", "Doctors", "Find a Doctor", "Locations", "Appointments"],
    },
    {
      name: "Solutions",
      list: [
        "News & Events",
        "Patient Resources",
        "Telemedicine",
        "Medical Tests",
        "Clinical Trials",
        "Clinical Studies",
      ],
    },
    {
      name: "Services",
      list: [
        "Medical Research",
        "Health Education",
        "Nutrition & Diet",
        "Exercise & Fitness",
        "Mental Health",
      ],
    },
    {
      name: "Pricing",
      list: [],
    },
  ];
  const navItemContentNonEmpty = () => {
    return navItemContent[navItemInFocus].list.length ? true : false;
  };
  useEffect(() => {
    console.log("got here", navItemInFocus);
  }, [navItemInFocus]);

  useEffect(() => {
    const store = document.querySelector(":root");
    const navItems = document.getElementById("nav-items");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // const dropdownArrow = document.getElementById("dropdown-arrow");
    // console.log(navBar.children);

    Array.from(navItems.children).forEach((navItem, i) => {
      const rect = navItem.getBoundingClientRect();
      // console.log("i", rect.x);
      const dropdownArrow = document.getElementById("dropdown-arrow");

      dropdownMenu.style.top = `${rect.y + rect.height - 20}px`;

      let leftX = window.pageXOffset + rect.x / 2 + rect.width;
      let arrow = window.pageXOffset + rect.x + rect.width / 2;

      const hoveringState = () => {
        let topY = window.pageYOffset + rect.y;
        store.style.setProperty("--scaleEffect", `${1}`);
        store.style.setProperty("--dropdownOpacity", `${1}`);
        store.style.setProperty("--dropdownPerspective", `none`);
        store.style.setProperty("--dropdownRotation", `${0}deg`);
        store.style.setProperty("--dropdownOffset", `${leftX}px`);
        store.style.setProperty("--dropdownArrowOffset", `${arrow}px`);
      };
      const notHoveringState = () => {
        store.style.setProperty("--scaleEffect", `${0.9}`);
        store.style.setProperty("--dropdownOpacity", `${0}`);
        store.style.setProperty("--dropdownPerspective", `${1000}px`);
        store.style.setProperty("--dropdownRotation", `${-2}deg`);
      };
      navItem.addEventListener("mouseover", (e) => {
        setNavItemInFocus(i);
        hoveringState();
        dropdownMenu.addEventListener("mouseover", hoveringState);
        dropdownMenu.addEventListener("mouseleave", () => {
          notHoveringState();
          dropdownMenu.removeEventListener("mouseover", hoveringState);
        });
      });

      // dropdownMenu.("mouseover", hoveringState);
      navItem.addEventListener("mouseleave", () => {
        notHoveringState();
      });
    });
  });

  return (
    <div className="container mx-auto flex justify-between pt-[2.5rem] h-[6rem] px-[2rem]">
      {accordionVisible && (
        <div className="fixed w-[100vw] m-0 overflow-hidden p-0 h-[calc(100vh)] z-[99] bg-[#fff] top-[0] left-0 flex flex-col items-center justify-center">
          <div class="h-[40vh] flex flex-col items-center justify-evenly">
            {navItemContent.map((item, j) => {
              return (
                <div key={j} className="cursor-pointer hover:bg-[#d9eddf]">
                  <div className="text-[4rem]">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex lg:hidden">
        <div className=" h-max rounded-full border-black border-[2px] py-[.3rem] px-[.5rem] ">
          Sign up
        </div>
      </div>
      <div className="flex flex-row translate-y-[.4rem]">
        <span className="text-[2rem] mt-[-13px] mr-[12px]">Aloe</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="translate-y-[-1rem] mr-[2rem] fill-black w-[3rem] h-[3rem]"
        >
          <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
        </svg>

        {/* <!-- nav main --> */}
        <div id="nav-bar" className=" hidden lg:flex flex-row space-x-[2rem]">
          {/* dropdown */}
          {/* <div id="dropdown-arrow" className="dropdown-arrow"></div> */}
          {/* <DropdownMenu id="dropdown-menu" className="dropdown-menu flex flex-row"/> */}
          <div id="dropdown-menu" className="dropdown-menu flex flex-row">
            <div className="flex w-full text-white bg-[#424a71] flex-col justify-between ">
              {navItemContent[navItemInFocus].list.map((item, i) => {
                return (
                  <div
                    key={item}
                    className="hover:bg-[#88b1ff] py-[1rem]  hover:cursor-pointer  px-[2rem] "
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          {/* /dropdown */}
          <div id="nav-items" className="flex flex-row space-x-[2rem]">
            {navItemContent.map((item, j) => {
              return (
                <div key={j} className="flex flex-row cursor-pointer">
                  {item.name}
                  <svg
                    className="fill-black w-[.8rem] h-[1.4rem] ml-[3px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
        {/* <!-- /nav main --> */}
      </div>
      {/* <!-- /nav-left --> */}

      {/* <!-- nav-right --> */}
      <div className="hidden lg:flex flex-row space-x-[1rem] h-full">
        {/* <input
          className="translate-y-[-.4rem] bg-[rgba(0,0,0,.15)] transition-all rounded-[6px] border-[rgba(255,255,255,.4)] border-[.5px] h-[2.2rem] max-w-[12rem] placeholder:text-slate-400 placeholder:text-[300] px-[.8rem]"
          placeholder="search site" /> */}
        <div>Sign in</div>
        <div className="translate-y-[-.4rem] h-max rounded-full border-[#333] bg-yellow-100 border-[2px] py-[.3rem] px-[.8rem] ">
          Join Today
        </div>
      </div>
      {/* <!-- /nav-right --> */}
      {/* burger menu */}
      <div className="flex z-[9999] translate-y-[-.6rem] relative items-center justify-center w-[50px] lg:hidden">
        {/* hamburger menu container */}
        <HamburgerMenu className="absolute " setAccordionVisible={setAccordionVisible} />

        {/* /hamburger menu container */}
      </div>
      {/* /burger menu */}
    </div>
  );
};
export default Nav;
