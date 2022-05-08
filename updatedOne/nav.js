document.querySelector("#pincode").addEventListener("click", myFun)

function myFun(){
    var x = document.querySelector("#dis")
    x.style.display = "block";
    var y = document.createElement("button")
    y.innerText = "X"
    y.setAttribute("class", "close")
    y.addEventListener("click",delt);
    document.querySelector("#dis").append(y)

}

function delt(){
    event.preventDefault();
    event.target.parentNode.remove()
    window.location.reload()
}

document.querySelector("#pinForm").addEventListener("submit", formSubmit)

var pinArr = JSON.parse(localStorage.getItem("pincode")) || []

function formSubmit(){
    event.preventDefault()

    pinObj = {
        pincode : pinForm.pin.value
    }
    pinArr.push(pinObj)
    console.log(pinArr)
    localStorage.setItem("pincode", JSON.stringify(pinArr))

    window.location.reload()
}