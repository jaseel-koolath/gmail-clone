import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, active }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
