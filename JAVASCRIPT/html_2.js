let cont_Elem = document.getElementById("cont1")
let int1Elem = document.getElementById("int1")
let int2Elem = document.getElementById("int2")
let alert1Elem = document.getElementById("alert1")
let alert2Elem = document.getElementById("alert2")
let Btn1Elem = document.getElementById("Btn1")
Btn1Elem.addEventListener("click", function (ele) {
    ele.preventDefault()
    if (int1Elem.value.toUpperCase() === int1Elem.value && int1Elem.value.trim().length !== 0) {
        alert1Elem.style.display="block"
        alert1Elem.style.color="white";
        alert1Elem.append("email is not valid")
    }
    // if (int2Elem.value.length < 8) {
    //     alert("*** password should contain atleast 8 characters ***")
    // }
    // let small = int2Elem.value.substr(1)
    // if (small.toUpperCase() === small) {
    //     alert("***  password should contains lowercase ***")
    // }
    let  check= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let ans=check.test(int2Elem)
    if(!ans&&int2Elem.value[0].toLowerCase() === int2Elem.value[0]){
        alert2Elem.style.display="block";
        alert2Elem.style.color="white";
        alert2Elem.append("*** password is not valid ***")
    }
})
let showElem = document.getElementById("show")
showElem.addEventListener("click", function () {
    if(int2Elem.type=="password"){
    int2Elem.setAttribute("type", "text")
    }
    else{
        int2Elem.setAttribute("type", "password")
    }
})