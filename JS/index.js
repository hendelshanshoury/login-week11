"user strict";

var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var siginBtnInput = document.getElementById("siginBtn");
var loginBtnInput = document.getElementById("loginBtn");
var popAlert = document.getElementById("popAlert");
var popSucess = document.getElementById("popSucess");
var popAlertLogin = document.getElementById("popAlertLogin");
var popSucessLogin = document.getElementById("popSucessLogin");
var logoutBtn = document.getElementById("logoutBtn");
var userEmailLogin = document.getElementById("userEmailLogin");
var userPasswordLogin = document.getElementById("userPasswordLogin");
var welcomeMsg = document.getElementById("welcomeMsg");

console.log(userEmailLogin);

//& ..............Check data in local storage................
var userList;
if (localStorage.getItem("userList") != null) {
  userList = JSON.parse(localStorage.getItem("userList"));
  console.log(userList);
} else {
  userList = [];
}

//& add new user............... sign up ....................
function addUser() {
  var users = {
    code: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };
  userList.push(users);
  localStorage.setItem("userList", JSON.stringify(userList));
  console.log(userList);
}

//&..........................add User sigin ......................

siginBtnInput?.addEventListener("click", function (eventInfo) {
  // console.log("hello");
  if (
    validateInput(userNameInput) &&
    validateInput(userEmailInput) &&
    validateInput(userPasswordInput)
  ) {
    addUser();
    // console.log("hello");
    //*  console.log(users);
    //*  console.log(userList);
    //*  console.log("hello");
    popSucess.innerHTML = "Successfully Registered";
    popAlert.classList.add("d-none");
    clearInput();
    window.location.href = "login.html";
  } else if (
    validateInput(userNameInput) == false &&
    validateInput(userEmailInput) == false &&
    validateInput(userPasswordInput) == false
  ) {
    popAlert.innerHTML =
      "There are Invalid fields.. You should fill them correctly";
    // popSucess.classList.add('d-none');
  } else if (validateInput(userNameInput) === false) {
    popAlert.innerHTML = "the username is in valid";
    popSucess.classList.add("d-none");
  } else if (validateInput(userEmailInput) == false) {
    popAlert.innerHTML = "the Email is in valid";
    popSucess.classList.add("d-none");
  } else if (validateInput(userPasswordInput) == false) {
    popAlert.innerHTML =
      "the password is in valid...It should start with the capital letter and the lowest number is 8 and the highest number is 18";
    popSucess.classList.add("d-none");
  }
});
siginBtnInput?.addEventListener("submit", function (eventInfo) {
  eventInfo.preventDefault;
});
//&............................user login.......................................
function userLogin() {
  if (
    validateInputLogin(userEmailLogin) == true &&
    validateInputLogin(userPasswordLogin) == true
  ) {
    console.log("hello");
    isExitLogin();
    clearInputLogin();
    window.location.href = "welcome.html";

    //*  console.log("hello");
    // console.log(eventInfo.id);

    // localStorage.setItem("loginUserList", JSON.stringify(loginUserList));
    //*   console.log(usersLogin);
    //* console.log(loginUserList);
    //*  console.log("hello");
    // popSucessLogin.innerHTML = "Successfully Registered";
    // popAlertLogin.classList.add("d-none");
    // clearInputLogin();
  } else if (validateInputLogin(userEmailLogin) === false) {
    popAlertLogin.innerHTML = "the Email is in valid";
    popSucessLogin.classList.add("d-none");
  } else if (validateInputLogin(userPasswordLogin) === false) {
    popAlertLogin.innerHTML =
      "the password is in valid...It should start with the capital letter and the lowest number is 8 and the highest number is 18";
    popSucessLogin.classList.add("d-none");
  } else if (
    validateInputLogin(userEmailLogin) === false &&
    validateInputLogin(userPasswordLogin) === false
  ) {
    popAlertLogin.innerHTML =
      "There are Invalid fields.. You should fill them correctly";
    // popSucess.classList.add('d-none');
  }
}
//&..........................add User login  ......................
loginBtnInput?.addEventListener("click", function () {
  userLogin();
});

loginBtnInput?.addEventListener("submit", function (eventInfo) {
  eventInfo.preventDefault;
});

//& ..............validation sign up ................
function validateInput(element) {
  var regex = {
    userName: /^[a-z]{3,10}\s?(\w{3,10})?$/,
    userEmail: /^.{5,20}@[a-z]{4,10}\.com$/,
    userPassword: /^[A-Z]\w{8,18}$/,
  };

  //* console.log(regex['userName'].test('Hend elsayed'));
  //* console.log(element);
  //* console.log(element.id);
  //*  console.log(regex[element.id]);
  //*  console.log(regex[element.id].test(element.value));
  //*  console.log(regex[element.id].test(element.value));
  var isValid = regex[element.id].test(element.value);
  //* console.log(isValid);
  if (isValid == true) {
    //* console.log('is Valid');
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    //* console.log(element);

    return true;
  } else {
    //* console.log('is inValid');
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    //* console.log(element);
    return false;
  }
}
//& ..............validation login................
function validateInputLogin(ele) {
  var regex = {
    userEmailLogin: /^.{5,20}@[a-z]{4,10}\.com$/,
    userPasswordLogin: /^[A-Z]\w{8,18}$/,
  };
  // console.log(ele);
  //* console.log(regex['userName'].test('Hend elsayed'));
  //* console.log(ele);
  //* console.log(ele.id);
  //*  console.log(regex[ele.id]);
  //*  console.log(regex[ele.id].test(ele.value));
  //*  console.log(regex[ele.id].test(ele.value));
  var isValid = regex[ele.id].test(ele.value);
  //* console.log(isValid);
  if (isValid == true) {
    //* console.log('is Valid');
    ele.classList.add("is-valid");
    ele.classList.remove("is-invalid");
    //* console.log(ele);
    // console.log(ele);

    return true;
  } else {
    //* console.log('is inValid');
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");
    //* console.log(ele);
    // console.log(ele.id);
    return false;
  }
}

//& .......................clear Form......................
function clearInput() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPasswordInput.value = null;
  popAlert.innerHTML = "";
  popSucess.innerHTML = "";
}
function clearInputLogin() {
  userEmailInput.value = null;
  userPasswordInput.value = null;
  popAlertLogin.innerHTML = "";
  popSucessLogin.innerHTML = "";
}

function isExitLogin() {
  // console.log("hello hend");
  // console.log(userEmailLogin);
  // console.log(userEmailLogin.id);
  // console.log(userEmailLogin.value);
  var email = userEmailLogin.value;
  var password = userPasswordLogin.value;
  // console.log(email);

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email == email && userList[i].password == password) {
      localStorage.setItem("loginList", JSON.stringify(userList[i].code));
      // welcomeMsg.innerHTML = `Welcome `+ userList[i].code +` `;
      window.location.href = "welcome.html";

      // console.log(usersLogin);
      // console.log(usersLogin.userEmail);
      // console.log(usersLogin.userPassword);
    } else if (
      userList[i].email != userEmailLogin.value ||
      userList[i].password != userPasswordLogin.value
    ) {
      popAlertLogin.innerHTML = ` There is an error in Email, Password or Both..`;
      popSucessLogin.classList.add("d-none");
    }
  }
}

//& ...............logout .......................
logoutBtn.addEventListener("click", function (eventInfo) {
  console.log("hello");
  localStorage.removeItem("loginList");
  window.location.href = "login.html";
});
logoutBtn.addEventListener("submit", function (eventInfo) {
  eventInfo.preventDefault;
});

