import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="movies logo" />
      <h2 className="app-subtitle">Let see some movies!</h2>
    </div>
  );
}
