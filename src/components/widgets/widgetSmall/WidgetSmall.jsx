import { Visibility } from "@material-ui/icons";
import React from "react";
import "./WidgetSmall.css";

// I could have done this in a separate component and repeat the
// list items in here

function WidgetSmall({ headerForWidget }) {
  const imageAddress =
    "https://images.pexels.com/photos/3615456/pexels-photo-3615456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  //const visualNumber = 5;

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">{headerForWidget}</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={imageAddress} alt="" className="widgetSmallImageAvatar" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Susan Carol</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/3765350/pexels-photo-3765350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImageAvatar"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Jane Doe</span>
            <span className="widgetSmallUserTitle">UI/UX Designer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImageAvatar"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">James Doe</span>
            <span className="widgetSmallUserTitle">RF Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="widgetSmallImageAvatar"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">James Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallButtonIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
