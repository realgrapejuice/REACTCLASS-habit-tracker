import React, { Component } from "react";
import styles from "./header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <h1 className={styles.title}>Habit Tracker</h1>
        <span className={styles.count}>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
