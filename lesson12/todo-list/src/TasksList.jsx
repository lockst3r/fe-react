import React, { Component } from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasksGateway.js";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.hetchTasks();
  }

  hetchTasks = () => {
    fetchTasksList().then((tasksList) => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.hetchTasks());
  };

  handleTasksStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.hetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.hetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTasksStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
