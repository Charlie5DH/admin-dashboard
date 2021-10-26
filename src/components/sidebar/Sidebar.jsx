import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOffOutlined,
  Report,
  PermIdentity,
} from "@material-ui/icons";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Analytics
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> Transactions
            </li>
          </ul>
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" /> Messages
            </li>
          </ul>
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOffOutlined className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
