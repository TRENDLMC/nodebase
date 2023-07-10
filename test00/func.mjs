import { odd, even } from "./var.mjs";

function chckOddOrEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

export default chckOddOrEven;
