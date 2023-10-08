let btnElem = document.getElementById("btn")
let prtElem = document.getElementById("parent")
let intElem = document.getElementById("int")
let no = 1
btnElem.addEventListener("click", function () {
    if (intElem.value !== "") {
        let newElem = document.createElement("p")
        prtElem.append(newElem)
        newElem.append(no + "." + intElem.value + " ")
        no++
        intElem.value = ""
        let newbtn = document.createElement("button")
        newbtn.append("x")
        newElem.append(newbtn)
        return newbtn.addEventListener("click", function () {
            return newElem.remove()
        })
    }
    else {
        alert("***  Type Something!!!  ***")
    }
})

