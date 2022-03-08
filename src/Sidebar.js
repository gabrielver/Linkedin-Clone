import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sadebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.search.brave.com/b5vhjmhu6picrIAhB7aKCccDNHy3Re0YDRXEmhOSPxQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oZHF3/YWxscy5jb20vd2Fs/bHBhcGVycy9zbW9r/ZS1jb2xvcnMtYWJz/dHJhY3QtcW8uanBn"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("designs")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
