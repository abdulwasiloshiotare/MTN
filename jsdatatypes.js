const date = new Date()

function greetings() {
    let d = date.getDay();
    let day = date.getDate()
    let month = date.getMonth();
    let year =date.getFullYear();
    let 

    if ((d == 3) && (day <= 7)) {
        alert("happy wednesday of the first week of the month");
    }
    if ((d == 3) && ((day >= 7) && (day <= 21))) {
        alert("happy wednesday of the second week of the month");
    }
    if ((d == 3) && ((day >= 15) && (day <= 221))) {
        alert("happy wednesdays of the third week of the month");
    }
    if (d == 0) {
        alert("happy sunday");
    }
    if (d == 1) {
        alert("happy monday");
    }
    if (d == 2) {
        alert("happy tuesday");
    }
    if (d == 3) {
        alert("happy wensday");
    }
    if (d == 4) {
        alert("happ thursday");
    }
    if (d == 5) {
        alert("happy friday");
    }
    if (d == 6) {
        alert("happy saturdayy");
    }

}
greetings();


function validateData() {
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let usernameValue= username.value;
    let emailValue= email.value;
    let passwordValue= password.value;
    //alert(emailValue + " " + usernameValue + " " + passwordValue);
    if (username.lrnght < 5) {
        alert("username must contain atleast 5 chars!");

    if (passzordvalue.lenght < 7) {
        alert("password lenght is too small!");
}



