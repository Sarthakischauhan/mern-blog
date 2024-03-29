import React from 'react'
import logo from "../../assets/images/logo.svg"
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const isUserLoggedIn = false;
  return (
    // generally we need a navbar with two different screens 
    // If user logged in show profile and name, 
    // if user is not logged in then only show login and register option

    <div className={styles.navbar}>
      <div id="logo">
        <img id="logo-image" src={logo} />
      </div>
      <div className="options">
        { !isUserLoggedIn ? 
          <ul className={styles.links}>
            <li className={styles.link}>Login</li>
            <li className={styles.link}>Register</li>
          </ul>
          :
          <div className="profile-section">
            <h3 id="profile-name">Name</h3>
            <img src="/" id="profile-photo" />
          </div>
        } 
      </div>
    </div>
  )
}

export default Navbar;

