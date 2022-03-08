import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("The mask is down", "Top news - 909 readers")}
      {newArticle("Coronavirus: FR update", "Top news - 450 readers")}
      {newArticle("Tesla hits new highs", "Cars and auto - 625 readers")}
      {newArticle("Bitcoin is on fire", "Crypto - 166 readers")}
      {newArticle("How to code in React 101", "Code - 1025 readers")}
      {newArticle("What is Redux", "Code - 264 readers")}
    </div>
  );
}

export default Widgets;
