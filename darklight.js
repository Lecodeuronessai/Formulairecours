const button = document.getElementById("submit")
button.addEventListener("click", function(event){
    event.preventDefault()
    const activeTheme = document.body.dataset.theme
    if(activeTheme == "dark"){
        document.body.setAttribute("data-theme", "light")
    }
    else{
        document.body.setAttribute("data-theme", "dark")
    }
})