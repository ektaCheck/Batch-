import React from "react";
import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";


function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <NavLink className={(navData)=>navData.isActive?`${styles.red}`:""} to="/contact">contact</NavLink>
          </li>
          <li>
            <NavLink className={(navData)=>navData.isActive?`${styles.red}`:""}  to="/product">product</NavLink>
          </li>
          <li>
            <NavLink   to="/nav">Progrmatic Navigation</NavLink>
          </li>
          <li>
            <NavLink   to="/prompt">Prompt</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
