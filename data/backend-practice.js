// types of request-
// 1. GET
// 2. POST
// 3. PUT
// 4. DELETE
const xhr = new XMLHttpRequest(); // create new https msg

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

// set up the request
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
// url - Uniform Resource Locator
