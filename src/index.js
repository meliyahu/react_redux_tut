import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });
const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});
store.dispatch(actions.bugAdded({ description: "deBug1" }));
store.dispatch(actions.bugAdded({ description: "Bug2" }));
store.dispatch(actions.bugAdded({ description: "Bug3" }));

store.dispatch(actions.bugResolved({ id: 1 }));
console.log("store: ", store.getState());

//unsubscribe();
