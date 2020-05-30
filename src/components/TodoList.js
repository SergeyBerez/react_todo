import React from "react";
//import TodoItem from "./TodoItem";
//import { NavLink } from "react-router-dom";

const TodoList = (props) => {
  // console.log("===============render");
 
  // props.todos.sort((a, b) => {
  //   return a.id - b.id;
  // });

  // let liTodos = props.todos.map((item, i) => {
  //   console.log(item);
  //   return (
  //     <li key={i}>
  //       <NavLink to={"/todolist/" + item.id}>{item.user_name}</NavLink>
  //     </li>
  //     // <TodoItem
  //     //   key={i}
  //     //   index={i}
  //     //   id={item.id}
  //     //   time={item.time}
  //     //   user_name={item.user_name}
  //     //   completed={item.completed}
  //     //   deleteUser={props.deleteUser}
  //     //   onchangeChek={props.onchangeChek}
  //     //   onShowUserTask={props.onShowUserTask}
  //     // />
  //   );
  // });

  return (
    <>
      {/* <div className="input-group col-lg-6">
        <input
          value={props.value}
          onChange={props.changeTitle}
          type="text"
          className="form-control"
        />

        <div className="input-group-append">
          <button
            // value={props.value}
            onClick={props.addUser}
            className="btn btn-secondary"
            type="button"
          >
            add User
          </button>
        </div>
      </div>
      {props.todos.length ? null : (
        <div className="alert alert-warning" role="alert">
          <h3>нету заметок введите заметку</h3>
        </div>
      )} */}
      {/* -------------render our user */}
      {/* {props.completed?} */}

      {/* <ul className="list-group list-group-flush">{liTodos}</ul> */}
    </>
  );
};

export default TodoList;
