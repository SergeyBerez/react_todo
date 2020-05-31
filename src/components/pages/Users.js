import React from "react";
import { NavLink, Route } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    console.log("================render ===== user",this.props.users);

    let users = this.props.users;
    let liUsers = Object.keys(users).map((userId, i) => {
     

      return (
        <li className="nav-item" key={i}>
          <NavLink className="nav-link" to={"/users/" + parseInt(userId)}>
            <i className="fas fa-user"></i> {users[userId].user_name}
          </NavLink>
        </li>
      );
    });
    //console.log(liUsers);
    // let liTodos = this.props.todos.map((item, i) => {
    //   console.log(item);
    //   return (
    //     <li className="nav-item" key={i}>
    //       <NavLink className="nav-link" to={"/users/" + item.id_user}>
    //         <i className="fas fa-user"></i> {item.user_name}
    //       </NavLink>
    //     </li>
    //   );
    // });

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          { Object.keys( this.props.users).length !== 0 ? (
            <>
              <i className="fas fa-users "></i>
              <span>all users</span>
            </>
          ) : (
            <>
              <i className="fas fa-users "></i> <span>not users add user</span>
            </>
          )}
        </div>

        <div className="input-group ">
          <input
            value={this.props.value}
            onChange={(e) => {
              this.props.changeTitle(e.target.value);
            }}
            type="text"
            className="form-control"
          />

          <div className="input-group-append">
            <button
              // value={props.value}
              onClick={this.props.addUser}
              className="btn btn-secondary"
              type="button"
            >
              add User
            </button>
          </div>
        </div>
        <ul className="list-group list-group-flush">{liUsers}</ul>
      </div>
    );
  }
}
