import "../../assets/scss/Header/Header.scss";
import logo from "../../assets/images/teddy.png";
// HOOK REACTJS
import { useState } from "react";
// ICON
import { MdLightMode, MdDarkMode  } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaCode, FaFolderOpen, FaMapLocationDot, FaBars } from "react-icons/fa6";


function Header() {
  const [mode, setMode] = useState(false); // set mặc định sẽ là lightmode và icon sẽ hiện là darkIcon
  const [isShowNav, setIsShowNav] = useState(false); //set mặc định sẽ ẩn header

  const handleClickMode = () => {
    setMode(!mode);
  };

  const handleSideBar = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <> 
      <aside className={`aside ${isShowNav === true ? "aside-show" : ""}`}>
        <a href="#logo" className="nav__logo">
          <img src={logo} alt="avatar" />
        </a>
        <div className="nav"> 
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home">
                <AiFillHome />
              </a>
            </li>
            <li className="nav__item">
              <a href="#about">
                <FaUser />
              </a>
            </li>
            <li className="nav__item">
              <a href="#journey">
                <FaMapLocationDot />
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills">
                <FaCode />
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects">
                <FaFolderOpen />
              </a>
            </li>
          </ul>
        </div>
        <a href="#mode" className="nav__mode">
          { mode === true ? 
            <MdLightMode className="mode" onClick={handleClickMode} /> :
            <MdDarkMode className="mode" onClick={handleClickMode} />
          }
        </a>
      </aside>
      <div id="sidebar" className={`sidebar ${isShowNav === true ? "sidebar-open" : ""}`} onClick={handleSideBar}>
        <FaBars />
      </div>
    </>
  )
}

export default Header;
