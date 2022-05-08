document.querySelector("form").addEventListener("submit",formFun)

    function formFun(){

        event.preventDefault()
        var userObj={

            Email:signUp.mail.value,
            Phone:signUp.mobile.value,
            key:signUp.pass.value

        }

        // signupArr.push(obj)
        // console.log(signupArr)

        localStorage.setItem("signUpData",JSON.stringify(userObj))
        window.location.href="logIn.html"

    }