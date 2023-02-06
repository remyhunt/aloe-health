import { useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  useEffect(() => {
    const store = document.querySelector(":root");
    const navBar = document.getElementById("nav-bar");
    const dropdown = document.getElementById("dropdown");
    // const dropdownArrow = document.getElementById("dropdown-arrow");
    // console.log(navBar.children);

    Array.from(navBar.children).forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      // console.log("i", rect.x);
      const dropdownArrow = document.getElementById("dropdown-arrow");

      dropdown.style.top = `${rect.y + rect.height - 20}px`;

      let leftX = window.pageXOffset + rect.x;
      child.addEventListener("mouseover", (e) => {
        // console.log("i", i);
        let topY = window.pageYOffset + rect.y;
        dropdownArrow.style.opacity = 1;
        dropdown.style.opacity = 1;
        store.style.setProperty("--scaleEffect", `${1}`);
        store.style.setProperty("--dropdownArrowOffset", `${leftX}px`);
      });
      child.addEventListener("mouseout", () => {
        // console.log("i", i);
        dropdown.style.opacity = 0;
        store.style.setProperty("--scaleEffect", `${0}`);
        store.style.setProperty("--dropdownArrowOffset", `${leftX}px`);
        dropdownArrow.style.opacity = 0;
      });
    });
  }, []);
  return (
    <div className="container mx-auto flex justify-between pt-[2.5rem] h-[6rem] px-[2rem]">
      <div className="flex lg:hidden">
        <div className="translate-y-[-.4rem] h-max rounded-[5px] border-white border-[1px] p-[.3rem] ">
          Sign up
        </div>
      </div>
      <div className="flex flex-row">
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
          <div id="dropdown-arrow" className="dropdown-arrow"></div>
          <div id="dropdown" className="dropdown-menu">
            <div className="flex px-[2rem] text-[#333] bg-red-400 py-[2rem] flex-col justify-between ">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className="flex text-[#333] px-[2rem] bg-red-200  py-[2rem] flex-col justify-between ">
              <div>a</div>
              <div>b</div>
              <div>c</div>
            </div>
          </div>
          {/* /dropdown */}
          <div className="flex flex-row cursor-pointer">
            Product
            <svg
              className="fill-black w-[.8rem] h-[1.4rem] ml-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          <div className="flex flex-row cursor-pointer">
            Solutions
            <svg
              className="fill-black w-[.8rem] h-[1.4rem] ml-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          <div className="flex flex-row cursor-pointer">
            Services
            <svg
              className="fill-black w-[.8rem] h-[1.4rem] ml-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          <div className="flex flex-row">Pricing </div>
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
      <div className="flex lg:hidden">burg</div>
      {/* /burger menu */}
    </div>
  );
};
export default Nav;
