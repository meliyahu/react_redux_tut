function add(a, b) {
  return a + b;
}

let res = add(4, 5);

function add_2(a) {
  return (b) => a + b;
}

let res2 = add_2(4)(5);
