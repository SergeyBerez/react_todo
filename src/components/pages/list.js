//import React from "react";
import Modal from "./modalEdit";
//import { useState } from "react";

import React, { Component } from "react";

export default class list extends Component {
  state = {
    modalShow: false,
  };
  toggleModal() {
    this.setState({ modalShow: !this.state.modalShow });
  }

  render() {
    console.log("======render list", this.props);
    console.log(this.props.value);
    return (
      <li className="list-group-item  userTasksLi">
        <div className="">
          <i className="fas fa-thumbtack"></i>
          <span>
            {this.props.nameTask}&nbsp; {this.props.time}
          </span>
        </div>
        <div>
          {this.state.modalShow ? (
            <Modal
              id_task={this.props.id_task}
              user={this.props.user}
               value={this.props.value}
              editTask={this.props.editTask}
              changeTitlebyModal={this.props.changeTitlebyModal}
              nameTask={this.props.nameTask}
              toggleModal={this.toggleModal.bind(this)}
            />
          ) : null}
          <button
            onClick={this.toggleModal.bind(this)}
            type="button"
            className="btn btn-outline-warning"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={this.props.deleteTask}
            type="button"
            className="btn btn-outline-danger"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}

// export default function list({ nameTask, id }) {
//   const [modal, showModal] = useState(true);
//   function toggleModal() {
//     showModal(!modal);
//   }
//   return (
//     <li className="list-group-item  userTasksLi">
//       <div className="">
//         <i className="fas fa-thumbtack"></i>
//         <span>
//           {nameTask} {id}
//         </span>
//       </div>
//       <div>
//         <Modal nameTask={nameTask} />

//         <button
//           toggleModal={toggleModal}
//           type="button"
//           className="btn btn-outline-warning"
//         >
//           <i className="fas fa-edit"></i>
//         </button>

//         <button type="button" className="btn btn-outline-danger">
//           <i className="fas fa-trash-alt"></i>
//         </button>
//       </div>
//     </li>
//   );
// }
