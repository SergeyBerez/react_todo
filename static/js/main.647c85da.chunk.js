(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),l=a.n(r),o=(a(33),a(17)),c=a(16),i=a(2),u=a(18),m=a(6),p=a(7),d=a(9),b=a(8),h=a(11),v=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;console.log("================render ===== user",this.props.users);var t=this.props.users,a=Object.keys(t).map((function(e,a){return s.a.createElement("li",{className:"nav-item",key:a},s.a.createElement(h.b,{className:"nav-link",to:"/users/"+parseInt(e)},s.a.createElement("i",{className:"fas fa-user"})," ",t[e].user_name))}));return s.a.createElement("div",null,s.a.createElement("div",{className:"alert alert-primary",role:"alert"},0!==Object.keys(this.props.users).length?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-users "}),s.a.createElement("span",null,"all users")):s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-users "})," ",s.a.createElement("span",null,"not users add user"))),s.a.createElement("div",{className:"input-group "},s.a.createElement("input",{value:this.props.value,onChange:function(t){e.props.changeTitle(t.target.value)},type:"text",className:"form-control"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:this.props.addUser,className:"btn btn-secondary",type:"button"},"add User"))),s.a.createElement("ul",{className:"list-group list-group-flush"},a))}}]),a}(s.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{style:{backgroundColor:"grey"}}," ","\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0437\u0430\u043c\u0435\u0442\u043e\u043a  ",s.a.createElement("br",null)," \u0432\u0435\u0440\u0441\u0438\u044f 1.1.1"))}}]),a}(s.a.Component),g=a(27);function E(e){var t=e.title,a=e.toggleModal,n=e.changeTitlebyModal,r=e.value,l=e.editTask,o=e.id_user,c=e.id_task;return console.log("=======render modal"),s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},t),s.a.createElement("button",{type:"button",className:"close",onClick:a},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("input",{value:r,onChange:function(e){n(e.target.value)},type:"text",className:"form-control"})),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{onClick:a,type:"button",className:"btn btn-secondary"},"Close"),s.a.createElement("button",{onClick:function(){l(o,c)},type:"button",className:"btn btn-primary"},"Save changes")))))}var k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modalShow:!1},e}return Object(p.a)(a,[{key:"toggleModal",value:function(){this.setState({modalShow:!this.state.modalShow})}},{key:"render",value:function(){var e=this;return console.log("======render list",this.props),s.a.createElement("li",{className:"list-group-item  userTasksLi"},s.a.createElement("div",{className:""},s.a.createElement("i",{className:"fas fa-thumbtack"}),s.a.createElement("span",null,this.props.title,"\xa0 ",this.props.time)),s.a.createElement("div",null,this.state.modalShow?s.a.createElement(E,{id_user:this.props.id_user,id_task:this.props.id_task,title:this.props.title,value:this.props.value,editTask:this.props.editTask,changeTitlebyModal:this.props.changeTitlebyModal,toggleModal:this.toggleModal.bind(this)}):null,s.a.createElement("button",{onClick:this.toggleModal.bind(this),type:"button",className:"btn btn-outline-warning"},s.a.createElement("i",{className:"fas fa-edit"})),s.a.createElement("button",{onClick:function(){e.props.deleteTask(e.props.id_user,e.props.id_task)},type:"button",className:"btn btn-outline-danger"},s.a.createElement("i",{className:"fas fa-trash-alt"}))))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;console.log("==============render user tasks",this.props.users);var t=[],a="";Object.keys(this.props.users).forEach((function(n){var s=e.props.users[n];if(s.id_user===parseInt(e.props.history.match.params.id)){a=s.user_name;var r,l=Object(g.a)(s.tasks);try{for(l.s();!(r=l.n()).done;){var o=r.value;t.push(o)}}catch(c){l.e(c)}finally{l.f()}}}));var n=t.map((function(t,a){return console.log(t),s.a.createElement(k,{key:a,id_user:parseInt(e.props.history.match.params.id),id_task:t.id_task,value:e.props.valueTodo,title:t.title,time:t.time,editTask:e.props.editTask,changeTitlebyModal:e.props.changeTitlebyModal,deleteTask:e.props.deleteTask})}));return s.a.createElement("div",null,s.a.createElement("div",{className:"alert alert-primary",role:"alert"},s.a.createElement("h1",null,a),0!==t.length?null:s.a.createElement("span",null,"no tasks add task")),s.a.createElement("div",{className:"input-group col-lg-6"},s.a.createElement("input",{value:this.props.valueUser,onChange:function(t){e.props.changeTitle(t.target.value)},type:"text",className:"form-control"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:function(){e.props.addTodoitems(parseInt(e.props.history.match.params.id))},disabled:0===Object.keys(this.props.users).length,className:"btn btn-secondary",type:"button"},"add task"))),s.a.createElement("div",null,s.a.createElement("ul",{className:"list-group list-group-flush"}," ",n),0===Object.keys(this.props.users).length?s.a.createElement("p",null,"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 user"):null))}}]),a}(s.a.Component),O=(a(39),a(10));var j=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({value:""}),m=Object(u.a)(l,2),p=m[0],d=m[1],b=Object(n.useState)({value:""}),g=Object(u.a)(b,2),E=g[0],k=g[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("users"))||{};r(Object(i.a)({},e))}),[]);var j=function(e,t){console.log(e,t);var n=Object(i.a)({},a),s=Object(i.a)({},n[e]),l=Object(c.a)(n[e].tasks);console.log(l);var o=l.map((function(e){return e.id_task===t&&(e.title=E.value),e}));l=o,s.tasks=l,n[e]=s,r(Object(i.a)({},n)),localStorage.setItem("users",JSON.stringify(Object(i.a)({},n))),k({value:""})},N=function(){var e=Object(o.a)({},"".concat((new Date).getTime()+1),{id_user:(new Date).getTime()+1,user_name:p.value,completed:!1,tasks:[]});r(Object(i.a)({},a,{},e)),localStorage.setItem("users",JSON.stringify(Object(i.a)({},a,{},e))),d({value:""})},T=function(e){var t=Object(i.a)({},a),n=Object(i.a)({},t[e]),s=Object(c.a)(t[e].tasks),l=new Date;s.push({id_task:(new Date).getTime()+1,title:p.value,time:"".concat((new Date).toLocaleDateString()," :").concat(l.getHours(),":").concat(l.getMinutes())}),n.tasks=s,t[e]=n,r(Object(i.a)({},t)),localStorage.setItem("users",JSON.stringify(Object(i.a)({},t))),d({value:""})},w=function(e){d({value:e})},S=function(e){k({value:e})},_=function(e,t){var n=Object(i.a)({},a),s=Object(i.a)({},n[e]),l=Object(c.a)(n[e].tasks).filter((function(e){return e.id_task!==t}));s.tasks=l,n[e]=s,r(Object(i.a)({},n)),localStorage.setItem("users",JSON.stringify(Object(i.a)({},n))),d({value:""})};return s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"nav justify-content-center"},s.a.createElement(h.b,{exact:!0,to:"/users",className:"nav-link",href:"#"},"users"),s.a.createElement(h.b,{to:"/about",className:"nav-link ",href:"#"},"About")),s.a.createElement(O.d,null,s.a.createElement(O.b,{exact:!0,path:"/users",render:function(){return s.a.createElement(v,{addUser:N,changeTitle:w,users:a,value:p.value})}}),s.a.createElement(O.b,{path:"/users/:id",render:function(e){return s.a.createElement(y,{valueUser:p.value,valueTodo:E.value,history:e,users:a,addTodoitems:T,editTask:j,changeTitle:w,changeTitlebyModal:S,deleteTask:_})}}),s.a.createElement(O.b,{path:"/about",component:f}),s.a.createElement(O.a,{to:"/users"}),s.a.createElement(O.b,{render:function(){return s.a.createElement("h1",{style:{color:"red"}}," 404 not found page...")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=s.a.createElement(h.a,null,s.a.createElement(j,null));l.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.647c85da.chunk.js.map