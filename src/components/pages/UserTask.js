import React from "react";
import List from "./list";
export default class UserTask extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    // console.log("============componentDidMount", this.props.users);
    // console.log(this.props.history.match.params.id);
    // let tasks = [];
    // Object.keys(this.props.users).forEach((userId) => {
    //   let task = this.props.users[userId];
    //   if (task.id_user === parseInt(this.props.history.match.params.id)) {
    //     this.setState({ tasks });
    //      tasks.push(task.tasks);
    //      console.log(tasks);
    //   }
    // });
    // let userTodo = this.props.todos.find((item, i) => {
    //   return item.id_user === parseInt(this.props.history.match.params.id);
    // });
    // if (userTodo) {
    //   this.setState({ userTodo });
    // }
  }

  render() {
    console.log("==============render user tasks", this.props.users);
    //console.log(Object.keys(this.props.users).length === 0);

    let tasks = [];
    let name = "";
    Object.keys(this.props.users).forEach((userId) => {
      let task = this.props.users[userId];

      if (task.id_user === parseInt(this.props.history.match.params.id)) {
        name = task.user_name;
        for (const i of task.tasks) {
          tasks.push(i);
        }
      }
    });

    let task = tasks.map((item, i) => {
      console.log(item);
      return (
        <List
          key={i}
          id_user={parseInt(this.props.history.match.params.id)}
          id_task={item.id_task}
          value={this.props.valueTodo}
          title={item.title}
          time={item.time}
          editTask={this.props.editTask}
          changeTitlebyModal={this.props.changeTitlebyModal}
          deleteTask={this.props.deleteTask}

          // showModal={item.showModal}
        />
      );
    });

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          <h1>{name}</h1>
          {tasks.length !== 0 ? null : <span>no tasks add task</span>}
        </div>

        <div className="input-group col-lg-6">
          <input
            value={this.props.valueUser}
            onChange={(e) => {
              this.props.changeTitle(e.target.value);
            }}
            type="text"
            className="form-control"
          />

          <div className="input-group-append">
            <button
              onClick={() => {
                this.props.addTodoitems(
                  parseInt(this.props.history.match.params.id)
                );
              }}
              disabled={Object.keys(this.props.users).length === 0}
              className="btn btn-secondary"
              type="button"
            >
              add task
            </button>
          </div>
        </div>
        <div>
          <ul className="list-group list-group-flush"> {task}</ul>
          {Object.keys(this.props.users).length === 0 ? (
            <p>добавьте user</p>
          ) : null}
        </div>
      </div>
    );
  }
}
