import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

const person = { name: "John", lastName: "Smith" };
const updated = Object.assign({}, person, { name: "Mosheh" });
console.log("person", person);
console.log("updated", updated);
const updated2 = { ...person, name: "Ben", location: "Adelaide" };
console.log("updated2", updated2);

const my_array = [1, 2, 3, 4];
// Removing
const removed = my_array.filter((value) => value != 2);
console.log("removed ", removed);

// Updating
const updated_array = my_array.map((n) => {
  console.log("n", n);
  return n == 2 ? 20 : n;
});
console.log("updated_array", updated_array);

//Object immutability
let book = { title: "The Borne Identity" };
const publish = (book) => {
  // book.isPublished = true;
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
};

const updatedBook = publish(book);
console.log("book ", book);
console.log("updated book ", updatedBook);
