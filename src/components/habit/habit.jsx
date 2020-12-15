import React, { PureComponent } from "react";
import styles from "./habit.module.css";

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className={styles.habit}>
        <span className={styles.habitTitle}>{name}</span>
        <span className={styles.habitCount}>{count}</span>
        <button className={styles.plus} onClick={this.handleIncrement}>
          <i className="far fa-plus-square"></i>
        </button>
        <button className={styles.minus} onClick={this.handleDecrement}>
          <i className="far fa-minus-square"></i>
        </button>
        <button className={styles.erase} onClick={this.handleDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
