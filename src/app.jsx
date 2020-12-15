import styles from "./app.module.css";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";
import React, { Component } from "react";
import Reset from "./components/reset/reset";

class App extends Component {
  state = {
    habits: [],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count <= 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
    /* const habits의 data form을 state의 habits와 동일하게 만들고, 이를 덮어씌우며 state를 업데이트 하는 방식 */
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleSubmit = (habit) => {
    const habits = [...this.state.habits];
    habits.push(habit);
    this.setState({ habits });
  };

  getTotalCount = () => {
    const length = this.state.habits.filter((habit) => habit.count > 0).length;
    return length;
  };

  reset = () => {
    const habits = [...this.state.habits];
    habits.map((habit) => (habit.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <section className={styles.container}>
        <Header totalCount={this.getTotalCount()} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onSubmit={this.handleSubmit}
        />
        <Reset onReset={this.reset} />
      </section>
    );
  }
}

export default App;
