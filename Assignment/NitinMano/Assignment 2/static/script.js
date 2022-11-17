var mailPattern = /\S+@\S+\.\S+/;
var specialPattern = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
var stringPattern = /\S/;

function ValidateFormSignIn() {
    let url = '/retrieveData'
fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = new Map(Object.entries(data));
      mail = document.forms["loginForm"]["mailId"].value;
      pwd = document.forms["loginForm"]["password"].value;
      console.log(data);
      if (data.has(mail) && data.get(mail) == pwd) {
          window.location="/home"
      } else {
          document.getElementById('error').innerHTML = "Invalid Credentials:)"
      }
    })
}


function ValidatePWD(pwd) {
    check = {
        'special': 0,
        'number': 0,
        'lower': 0,
        'upper': 0
    }
    if (pwd.length >= 8 && pwd.length <= 25) {
        for (i = 0; i < pwd.length; i++) {
            ascii = pwd.charCodeAt(i);
            if (ascii >= 65 && ascii <= 91) check['upper']++;
            else if (ascii >= 97 && ascii <= 122) check['lower']++;
            else if (ascii >= 48 && ascii <= 57) check['number']++;
            else check['special']++;
        }
        if (check['number'] >= 1 && check['special'] >= 1 && check['upper'] >= 1 && check['lower'] >= 1) return true;
    }
    return false;
}

function ValidateMAIL(mail) {
    return !specialPattern.test(mail) && mailPattern.test(mail);
}

function ValidateUSERNAME(usr) {
    for(i=0;i<usr.length;i++){
      ascii = usr.charCodeAt(i);
      if((ascii>=65 && ascii<=91) || (ascii>=97 && ascii<=122));
      else return false;
    }
  return true;
}

function ValidateFormSignUp() {
  let url = '/retrieveData'
fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
      data = new Map(Object.entries(data));
    usr = document.forms["signUPForm"]["usr"].value;
    mail = document.forms["signUPForm"]["mailId"].value;
    pwd = document.forms["signUPForm"]["password"].value;
    if (!data.has(mail)) {
        if (!ValidateUSERNAME(usr)) {
            document.getElementById('error').innerHTML = "Invalid USERNAME Format-_-";
        } else {
            if (!ValidateMAIL(mail)) {
                document.getElementById('error').innerHTML = "Invalid Email Format-_-";
            } else {
                if (ValidatePWD(pwd)) {
                    $.ajax({
                        url: '/addData/'+usr+'-'+mail+'-'+pwd,
                        data: $('form').serialize(),
                        type: 'POST',
                    });
                    window.location="/"
                } else {
                    document.getElementById('error').innerHTML = "Incorrect Password Format-_-)"
                    alert("Password Must contain\n at least one number and one uppercase and lowercase letter, and at least 8 or more characters")

                }
            }
        }
    } else {
       document.getElementById('error').innerHTML = "User Already Exist -_-"
    }
    })
}