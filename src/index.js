import store from "./store";
import * as actions from "./actionTypes";
import * as actionCreator from "./actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

store.dispatch(actionCreator.bugAdded("Bug1"));
store.dispatch(actionCreator.bugAdded("Bug2"));
store.dispatch(actionCreator.bugAdded("Bug3"));

store.dispatch(actionCreator.bugResolved(1));

//unsubscribe();
