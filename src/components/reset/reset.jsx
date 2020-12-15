import React, { Component } from "react";
import styles from "./reset.module.css";

class Reset extends Component {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <button
        className={styles.resetBtn}
        type="button"
        onClick={this.handleReset}
      >
        Reset All
      </button>
    );
  }
}

export default Reset;
