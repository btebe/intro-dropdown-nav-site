import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

function Nav({ show, navToggle }) {
  const [dropdownZero, setDropdownZero] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);

  const handledtoggleZero = () => setDropdownZero(!dropdownZero);
  const handledtoggleOne = () => setDropdownOne(!dropdownOne);

  useEffect(() => {
    if (show === false) {
      setDropdownZero(false);
      setDropdownOne(false);
    }
  }, [show]);
  return (
    <header className='primary-header flex'>
      <div className='logo'>
        <h1>Snap</h1>
      </div>
      <button
        className='mobile-nav-toggle'
        aria-controls='primary-navation'
        aria-expanded={show ? "true" : "false"}
        onClick={navToggle}
      >
        <span className='sr-only'>Menu</span>
      </button>
      <nav
        id='primary-navation'
        className='primary-nav flex text-gray'
        data-visible={show ? "true" : "false"}
      >
        <ul className='primary-navigation-1 indicator flex'>
          <li>
            <span onClick={handledtoggleZero}>
              Features
              {dropdownZero ? (
                <img src={arrowUp} alt='arrowup' />
              ) : (
                <img src={arrowDown} alt='arrowdown' />
              )}
            </span>
            {dropdownZero && <Dropdown dropdownZero={dropdownZero} />}
          </li>
          <li>
            <span onClick={handledtoggleOne}>
              Company
              {dropdownOne ? (
                <img src={arrowUp} alt='arrowup' />
              ) : (
                <img src={arrowDown} alt='arrowdown' />
              )}
            </span>
            {dropdownOne && <Dropdown dropdownOne={dropdownOne} />}
          </li>
          <li>
            <span>Careers</span>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
        <ul className='primary-navigation-2 indicator flex'>
          <li>
            <span>Login</span>
          </li>
          <li>
            <span className='btn'>Register</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
