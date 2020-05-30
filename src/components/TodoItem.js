import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const TodoItem = (props) => {
  // const cls = ["active"];
  console.log(props);
  //console.log(props.completed);
  return (
    <Fragment>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div style={{ marginRight: "15px" }} className="input-group-text">
          <input
            checked={props.completed}
            onChange={(e) => {
              props.onchangeChek(e, props.index);
            }}
            type="checkbox"
          />
        </div>
        <p className={props.completed ? "textcheck" : ""}>
          {props.index + 1} :{props.user_name}
        </p>
        <p style={{ marginLeft: "auto" }}>{props.time}</p>
        <button
          style={{ marginLeft: "15px" }}
          onClick={() => {
            props.history.push("/todolist/" + props.id);
          }}
          type="button"
          className="btn  btn-primary"
        >
          add task{props.id}
        </button>
        <button
          style={{ marginLeft: "15px" }}
          onClick={(e) => {
            // props.deleteUser(props.id);
            props.deleteUser(props.index);
          }}
          type="button"
          className="btn  btn-danger"
        >
          delete user
        </button>
      </li>
    </Fragment>
  );
};

export default withRouter(TodoItem);
