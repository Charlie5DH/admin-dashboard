import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

import "./Topbar.css";

function TopBar() {
  const notificationAmount = 2;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">ViberAir</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">{notificationAmount}</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/9155719/pexels-photo-9155719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
