import { createAction } from "@reduxjs/toolkit";

// const action = createAction("bugUpdated");
// console.log(action({description:"test"}));
// Action types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLOVED = "bugResolved";

// Action creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

//Reducers
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id != action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id != action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
