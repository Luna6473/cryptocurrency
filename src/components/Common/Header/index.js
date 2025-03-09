import React from 'react'
import "./styles.css";
function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        cryptoTracker<span style={{color: "var(--blue)"}}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/">
          <p className="links">Compare</p>
        </a>
        <a href="/">
          <p className="links">Watchlist</p>
        </a>
        <a href="/">
          <p className="links">Dashboard</p>
        </a>
      </div>  
    </div>
  );
}

export default Header