import { formatCurrency } from "../../scripts/utils/money.js";

console.log("Test suite: formatCurrency");

console.log("Convert cents ino dollar");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with Zero");

if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("Failed");
}

console.log("Round up to the nearest cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("Failed");
}
