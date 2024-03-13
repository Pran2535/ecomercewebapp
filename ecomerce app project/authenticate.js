function authenticate() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Preloaded set of credentials
    var validUsernames = ["sg22331", "sg22345","sg22334"];
    var validPassword = "sukirti";

    // Check if username and password match the preloaded set
    if (validUsernames.includes(usernameInput) && passwordInput === validPassword) {
        let count=1;
        if(count==1){
              setTimeout(function() {
            console.log("hello world");
             window.location.assign("http://127.0.0.1:5500/loading.html");
        }, 1000);
         alert("Login successful!");
        }
       
        // Redirect to loading.html after a short delay (e.g., 1 second)
       // 1000 milliseconds = 1 second
    } else {
        alert("Invalid username or password.");
    }
}
function logout(){
    setTimeout(() => {
        window.location.href="index.html";
    }, 1000);
    alert("logout successfull");
}
function cart(){
    setTimeout(()=>{
        window.location.href="cart.html";
    })
}
