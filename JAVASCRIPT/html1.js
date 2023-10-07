let btnElem = document.getElementById("btn")
let prtElem = document.getElementById("parent")
let intElem = document.getElementById("int")
let no = 1
btnElem.addEventListener("click", function () {
    let newElem = document.createElement("p")
    if (intElem.value != " ") {
        prtElem.append(newElem)
        newElem.append(no + "." + intElem.value +" ")
    }
    intElem.value = " "
    no++
    let newbtn = document.createElement("button")
    newbtn.append("x")
    newElem.append(newbtn)
    return newbtn.addEventListener("click", function () {
        return newElem.remove()
    })
})

