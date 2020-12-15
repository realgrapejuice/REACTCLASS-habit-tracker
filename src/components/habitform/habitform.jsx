import React, { PureComponent } from "react";
import styles from "./habitform.module.css";

class HabitForm extends PureComponent {
  inputRef = React.createRef();

  submitEventHandler = (event) => {
    event.preventDefault();
    const habit = {
      id: Date.now(),
      name: this.inputRef.current.value,
      count: 0,
    };
    this.props.onSubmit(habit);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitEventHandler}>
        <input
          ref={this.inputRef}
          className={styles.input}
          type="text"
          placeholder="Add Habit"
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default HabitForm;
