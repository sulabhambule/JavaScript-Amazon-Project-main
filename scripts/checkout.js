import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';

//async >> Promises >>> callBack functions

async function loadPage() {

  await loadProductsFetch(); // wait to complete action
  // only used await when it is inside async function

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    }); 
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1'); // let us control when to go to next step
  });

}).then((value) => {
  console.log(value);
  // after finish loading
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// recomended to use promises instead of callbacks beacause it pewvents from to much nesting and code more flatend


/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/