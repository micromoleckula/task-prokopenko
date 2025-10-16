import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CurrentTime } from "./CurrentTime/CurrentTime";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <img className={styles.logo} src={logo} alt="logotype" />
        <CurrentTime />
      </div>
    </header>
  );
};
