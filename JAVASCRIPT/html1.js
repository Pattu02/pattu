let btnElem = document.getElementById("btn")
let prtElem = document.getElementById("parent")
let intElem = document.getElementById("int")
let i = 1
btnElem.addEventListener("click", function () {
    if (intElem.value !== "") {
        let newElem = document.createElement("p")
        prtElem.append(newElem)
        newElem.append(i + "." + intElem.value + " ")
        i++
        intElem.value = ""
        let newbtn = document.createElement("button")
        newbtn.append("x")
        newElem.append(newbtn)
        newbtn.addEventListener("click", function () {
            newElem.remove()
        })
    }
    else {
        alert("***  Type Something  ***")
    }
})

