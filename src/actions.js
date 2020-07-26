import * as actions from "./actionTypes";

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }
//OR
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLOVED,
  payload: {
    id,
  },
});
