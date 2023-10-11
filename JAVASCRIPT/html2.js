let contElem = document.getElementById("cont");
let inElem = document.getElementById("in");
let btn_Elem = document.getElementById("Btn");
let newDiv = document.createElement("div");
contElem.append(newDiv);
btn_Elem.addEventListener("click", function () {
    if (inElem.value.trim().length !== 0) {
        for (let i = 1; i <= 10; i++) {
            let newTag = document.createElement("p");
            newDiv.append(newTag);
            newTag.append(`${inElem.value} X ${i} = ${inElem.value * i}`)
        }
    }
    else {
        alert("***  Type Something  ***")
    }
})
inElem.addEventListener("focus", function () {
    inElem.value="";
})
