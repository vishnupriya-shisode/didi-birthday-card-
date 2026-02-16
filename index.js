const calendar22El = document.getElementById("calendar22")
const calendar23El = document.getElementById("calendar23")
const calendarEl = document.getElementById("calendarScreen")
const birthdayEl = document.getElementById("birthdayScreen")

calendar22El.addEventListener("click" , function(){
    calendar22El.style.display = "none"
    calendar23El.style.display = "flex"
    setTimeout(function(){
        calendarEl.style.display = "none"
        birthdayEl.style.display = "flex"

    }, 1500)
})