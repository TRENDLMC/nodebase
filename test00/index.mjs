import { odd, even } from "./var.mjs";
import chckOddOrEven from "./func.mjs";

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(chckOddOrEven(10));
console.log(checkStringOddOrEven("hello"));
