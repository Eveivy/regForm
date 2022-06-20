let formEl = document.getElementById("form_el")
let btnEl = document.getElementById("btn_el")
let input = document.querySelectorAll("input")
let errorText = document.createElement("span")
let errorIcon = document.querySelectorAll("img")
let error = document.querySelectorAll(".err_msg")
let fn = document.getElementById("first_name")
let ln = document.getElementById("last_name")
let em = document.getElementById("email")
let nb = document.getElementById("phone")

formEl.addEventListener("submit", function (ev) {
    ev.preventDefault()

    let formData = new FormData(formEl)
    for (let [name, value] of formData) {

        if (value === "") {
            input.forEach(function (el) {
                el.style.border = "2px solid red"
            })
            errorIcon.forEach(function (el) {
                el.classList.remove("hide")
            })
            error.forEach(function (el) {
                el.classList.remove("hide")
            })
        } 
        validateEach()

        if(name && value){
            localStorage.setItem(name, value)
            console.log(localStorage)
        }
    }

})

function validateEach() {
    let fnVal = fn.value
    let lnVal = ln.value
    let emVal = em.value
    let nbVal = nb.value

    if (fnVal === '') {
        document.getElementById("icon1").classList.remove("hide")
    } else {
        fn.style.border = "none"
        document.getElementById("icon1").classList.add("hide")
        document.getElementById("msg1").classList.add("hide")

    }


    if (lnVal === '') {
        document.getElementById("icon2").classList.remove("hide")
    } else {
        ln.style.border = "none"
        document.getElementById("icon2").classList.add("hide")
        document.getElementById("msg2").classList.add("hide")

    }


    if (emVal === '') {
        document.getElementById("icon3").classList.remove("hide")
    } else {
        em.style.border = "none"
        document.getElementById("icon3").classList.add("hide")
        document.getElementById("msg3").classList.add("hide")

    }


    if (nbVal === '') {
        document.getElementById("icon4").classList.remove("hide")
    } else {
        nb.style.border = "none"
        document.getElementById("icon4").classList.add("hide")
        document.getElementById("msg4").classList.add("hide")

    }
 
}