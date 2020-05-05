import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  
  const firstTime = [hours, ":", minutes, " ", day, "/", month+1, "/", year];

  const [time, setTime] = useState(firstTime);

  setInterval(function () {
    setTime(() => {
      hours = new Date().getHours();
      minutes = new Date().getMinutes();
      
      let newTime = [hours, ":", minutes, " ", day, "/", month+1, "/", year];
      return newTime;
    });
  }, 30000);

  return (
    <footer>
      <p>{time}</p>
    </footer>
  );
}

export default Footer;
