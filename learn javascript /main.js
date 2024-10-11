const old = function (a, b) {
  return a + b;
};

const add = (a, b) => {
  return a + b;
};

console.log(old(3, 5));
console.log(add(9, 1));

const ids = [1, 2, 3, 4, 5];

ids.forEach((id) => {
  id++;
  console.log(id);
});

const ali = () => {
  console.log("ALI");
};

ali();

function test(first, ...other) {
  console.log(first);
  console.log(other);
}

test("a", "b", "c");

const names = ["ali", "yulii"];
const others = ["dude", "mate"];

const us = [...names, ...others];

const namesPlusMe = [...names, "me"];

console.log(namesPlusMe);

console.log(names);

console.log(us);
