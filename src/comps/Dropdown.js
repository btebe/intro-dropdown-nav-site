import React from "react";
import todoIcon from "../images/icon-todo.svg"
import calendarIcon from "../images/icon-calendar.svg"
import reminderIcon from "../images/icon-reminders.svg"
import planningIcon from "../images/icon-planning.svg"


function Dropdown({ dropdownZero, dropdownOne }) {

  return (
    <>
      {
        dropdownZero && (<>
          <ul className={dropdownZero ? 'dropdown-menu menu-1 drop-indicator  active' : 'dropdown-menu'}>
            <li><img src={todoIcon} alt="todo" /> list</li>
            <li><img src={calendarIcon} alt="calendar" />Calendar</li>
            <li><img src={reminderIcon} alt="reminder" />Reminders</li>
            <li><img src={planningIcon} alt="planning" />Planning</li>

          </ul>
        </>)
      }
      {
        dropdownOne && (<>
          <ul className={dropdownOne ? 'dropdown-menu menu-2 drop-indicator  active' : 'dropdown-menu'}>
            <li>History</li>
            <li>Our Team</li>
            <li>blog</li>
          </ul>
        </>)
      }

    </>
  );
}

export default Dropdown;
