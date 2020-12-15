import React, { Component } from "react";
import Habit from "../habit/habit";
import HabitForm from "../habitform/habitform";
import styles from "./habits.module.css";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleSubmit = (habit) => {
    this.props.onSubmit(habit);
  };

  render() {
    return (
      <section className={styles.container}>
        <HabitForm onSubmit={this.handleSubmit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              id={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Habits;
