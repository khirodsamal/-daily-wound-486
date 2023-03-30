
// ***************sliding section********************
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});

// ************* signup section ***********************
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const password = document.getElementById("password");
const signUpForm = document.getElementById("signupform");
const signUpBtn = document.getElementById("signupbtn");


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
      name: username.value,
      email: useremail.value,
      password: password.value,
    };
    fetch("http://localhost:9900/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
        // alert("An error occurred, please try again.");
      });
  });
  
  signUpBtn.addEventListener("click", () => {
    signUpForm.submit();
  });


//   *******************signin section************************

const signinform = document.getElementById("signinform");
const signinemail = document.getElementById("signinemail");
const signinpassword = document.getElementById("signinpassword");

signinform.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    email: signinemail.value,
    password: signinpassword.value
  };

  fetch("http://localhost:9900/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    alert(data.message);
    if(data.message=="login successfull"){
        window.location.assign("index.html");
    }
    
  })
  .catch(err => {
    console.log(err);
  });
});