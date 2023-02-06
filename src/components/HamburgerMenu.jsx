import { useEffect, useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({setAccordionVisible}) => {


  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log('got here', toggle)
    setAccordionVisible(toggle)

    // barTop.classList.add("bar-top-transform");
    // barMiddle.classList.add("bar-middle-transform");
    // barBottom.classList.add("bar-bottom-transform");
  }, [toggle]);



  return (
    <>
    <div id="hamburger-menu-container" className="z-[9999]" >
      <label >
        <input type="checkbox" id="hamburger-checkbox" name="" className="hidden" onClick={() => setToggle(!toggle)} />
        <div className="hamburger-menu">
          <div className={`bar-top bg-black ${toggle ? "bar-top-transform" : ""}`}> </div>
          <div className={`bar-middle bg-black ${toggle ? "bar-middle-transform" : ""}`}> </div>
          <div className={`bar-bottom bg-black ${toggle ? "bar-bottom-transform" : ""}`}> </div>
        </div>
      </label>
    </div>
    </>
  );
};
export default HamburgerMenu;
