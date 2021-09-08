// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime";
// import "babel-polyfill";

// \/ All of your javascript should go here \/

let userNameInput = document.querySelector("#name");
let userEmailInput = document.querySelector("#email");
let userPasswordInput = document.querySelector("#password");
let userMessageInput = document.querySelector("#message");
let checkbox = document.getElementById("checkbox");

document.querySelector(".btn").addEventListener("click", async (event) => {
  // --------- =^.^= --------- To avoid the default - Line 14 index html
  event.preventDefault();

  // --------- =^.^= --------- Conditions
  if (userNameInput.value === "") {
    alert("User name is required");
    return;
  }

  if (userEmailInput.value === "") {
    alert("User email is required");
    return;
  }

  if (userPasswordInput.value === "") {
    alert("User password is required");
    return;
  }

  if (userMessageInput.value === "") {
    alert("User message is required");
    return;
  }

  if (!checkbox.checked) {
    alert("Check me out is not checked!");
    return;
  }

  // --------- =^.^= ---------
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "post",
    body: JSON.stringify({
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
      message: userMessageInput.value,
      checkbox: checkbox.value,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  let user = await response.json();
  alert(`Thank you for submitting your details. User ID: ${user.id}`);
  reset();
});

// --------- =^.^= --------- to clear the input text when refresh the page

function reset() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";
  userMessageInput.value = "";
  checkbox.checked = false;
}

function init() {
  reset();
}
window.onload = init;
