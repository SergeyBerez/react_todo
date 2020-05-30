import React from "react";
import Users from "./components/pages/Users";
import { useState, useEffect } from "react";
//import TodoList from "./components/TodoList";
import About from "./components/pages/About";
import UserTask from "./components/pages/UserTask";

import "./App.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

function App() {
  // const [state, setState] = useState({ isShow: true });

  // const onLogin = () => {
  //   let isShow = !state.isShow;
  //   setState({ isShow });
  // };

  let store = {
    // 343443: {
    //   id_user: 1,
    //   user_name: "sergey",
    //   time: new Date().toLocaleDateString(),
    //   completed: false,
    //   tasks: [
    //     { id_task: 4, title: " sergey купить  " },
    //     { id_task: 3, title: " sergey купить1  " },
    //   ],
    // },
    // todos: [
    // {
    // },
    //   {
    //     id_user: 2,
    //     user_name: "vasya",
    //     time: new Date().toLocaleDateString(),
    //     completed: false,
    //     tasks: [{ id_task: 4, title: "vasya купить  " }],
    //   },
    // ],
  };
  const [statetodos, setTodos] = useState(store);
  const [valueUser, setValueUser] = useState({ value: "" });
  const [valueTodo, setValueTodor] = useState({ value: "" });
  // useEffect(() => {
  //   setTodos(store);
  // });

  const editTask = (id_user, id_task) => {
    console.log(id_user, id_task);
    let users = { ...statetodos };
    let user = { ...users[id_user] };
    let userTasks = [...users[id_user].tasks];
    console.log(userTasks);

    let tasks = userTasks.map((item) => {
      if (item.id_task === id_task) {
        item.title = valueTodo.value;
      }
      return item;
    });
    userTasks = tasks;
    user.tasks = userTasks;
    users[id_user] = user;

    setTodos({ ...users });
    setValueTodor({ value: "" });

    // let todos = [...statetodos.todos].map((user) => {
    //   if (user.id_user === id_user) {
    //     [...user.tasks].map((item) => {
    //       if (item.id_task === id_task) {
    //         item.title = statetodos.value1;
    //       }
    //       return item;
    //     });
    //   }
    //   return user;
    // });

    // setTodos({ todos, value: "", value1: "" });
  };
  const addUser = () => {
    let newUser = {
      [`${new Date().getTime() + 1}`]: {
        id_user: new Date().getTime() + 1,
        user_name: valueUser.value,
        completed: false,
        tasks: [],
      },
    };

    // users.push(newUser);
    setTodos({ ...statetodos, ...newUser });
    setValueUser({ value: "" });
  };
  const addTodoitems = (id_user) => {
    let users = { ...statetodos };
    let user = { ...users[id_user] };
    let userTasks = [...users[id_user].tasks];
    let date = new Date();
    userTasks.push({
      id_task: new Date().getTime() + 1,
      title: valueUser.value,
      time: `${new Date().toLocaleDateString()} :${date.getHours()}:${date.getMinutes()}`,
    });

    user.tasks = userTasks;
    users[id_user] = user;
    setTodos({ ...users });
    setValueUser({ value: "" });

    //let date = new Date();

    // todos.map((user) => {
    //   if (user.id_user === id_user) {
    //     let newTodo = {
    //       id_task: new Date().getTime() + 1,
    //       title: statetodos.value,
    //       time: `${new Date().toLocaleDateString()} :${date.getHours()}:${date.getMinutes()}`,
    //       completed: false,
    //     };
    //     user.tasks.push(newTodo);
    //   }
    //   return user;
    // });

    // setTodos({ todos, value: "" });
  };

  // const changeChecked = (e, i) => {
  //   let todos = [...statetodos.todos];
  //   todos[i].completed = e.target.checked;

  //   setTodos({ todos, value: statetodos.value });
  // };
  const changeTitle = (value) => {
    //let arr = {...statetodos;}
    //  setTodos({ todos: arr,});
    setValueUser({ value });
  };

  const changeTitlebyModal = (value) => {
    setValueTodor({ value });
    // let users = {...statetodos.todos};
    // setTodos({ todos: arr, value: "", value1: e });
  };
  // const onShowUserTask = (id) => {
  //   let todos = [...statetodos.todos].map((user) => {
  //     if (user.id === id) {
  //       user.completed = !user.completed;
  //     }
  //     return user;
  //   });

  //   console.log(statetodos);
  //   setTodos({ todos, value: statetodos.value });
  // };
  const deleteUser = (id) => {
    // id++;
    // console.log(id);
    let todos = [...statetodos.todos];

    todos.splice(id, 1);
    // let todos = [...statetodos.todos].filter((items) => {
    //   console.log(items.id);
    //   return items.id !== id;
    // });
    setTodos({ todos, value: statetodos.value });
  };
  const deleteTask = () => {
    console.log(1111);
  };

  return (
    <div className="container">
      {/* {state ? <h2>вы вошли</h2> : <h2>авторизируйтесь</h2>} */}
      {/* <button
        type="button"
        onClick={() => {
          onLogin();
        }}
        className="btn btn-primary"
      >
        добавьте пользователя
      </button> */}
      {true ? (
        <nav className="nav justify-content-center">
          {/* <NavLink exact to="/" className="nav-link" href="#">
            Home
          </NavLink> */}
          <NavLink exact to="/" className="nav-link" href="#">
            users
          </NavLink>

          {/* <NavLink to="/todolist" className="nav-link" href="#">
            TodoList
          </NavLink> */}
          <NavLink to="/about" className="nav-link " href="#">
            About
          </NavLink>
        </nav>
      ) : null}

      {/* {state ? <Route exact path="/"></Route> : null} */}

      <Switch>
        {/* <Route
          exact
          path="/"
          render={() => {
            return <h1>home page</h1>;
          }}
        /> */}

        <Route
          exact
          path="/users"
          // component={Main}
          render={() => (
            <Users
              addUser={addUser}
              changeTitle={changeTitle}
              users={statetodos}
              value={valueUser.value}
            />
          )}
        ></Route>
        <Route
          path="/users/:id"
          // component={UserTask}
          render={(e) => (
            <UserTask
              valueUser={valueUser.value}
              valueTodo={valueTodo.value}
              history={e}
              users={statetodos}
              addTodoitems={addTodoitems}
              editTask={editTask}
              changeTitle={changeTitle}
              changeTitlebyModal={changeTitlebyModal}
              deleteTask={deleteTask}
            />
          )}
        />
        <Route path="/about" component={About}></Route>
        {/* <Route
          path="/todolist"
          render={() => (
            <TodoList
              addUser={addUser}
              deleteUser={deleteUser}
             // onShowUserTask={onShowUserTask}
              changeTitle={changeTitle}
              addTodoitems={addTodoitems}
              onchangeChek={changeChecked}
              todos={statetodos.todos}
              value={statetodos.value}
            />
          )}
        /> */}
        <Redirect to="/users"></Redirect>
        <Route
          render={() => {
            return <h1 style={{ color: "red" }}> 404 not found page...</h1>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
