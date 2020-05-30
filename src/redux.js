const redux = require("redux");

const initialState = {
  counter: 0,
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };

    case "SUB": {
      return {
        counter: state.counter - 1,
      };
    }

    case "ADD_NUB": {
      return {
        counter: action.value,
      };
    }
    default:
      return state;
  }
};
//Store
const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));

//actions
const addCounter = {
  type: "ADD",
};

store.dispatch(addCounter);

store.dispatch({ type: "SUB" });

store.dispatch({ type: "ADD_NUB", value: 10 });
