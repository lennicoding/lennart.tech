var dark_mode_input = document.getElementById("toggle-btn-1");
var wave = document.getElementById("wave")
var github_icons_elements = document.getElementsByClassName("github-logo");

dark_mode_input.addEventListener('change', ()=>{
    document.body.classList.toggle("light-mode")
    
    if(wave.getAttribute("fill") == "#f8f8f8")
        document.getElementById("wave").setAttribute("fill", "#262626")
    else
        document.getElementById("wave").setAttribute("fill", "#f8f8f8")

    for(var i = 0; i < github_icons_elements.length; i++){
        if(github_icons_elements[i].getAttribute("stroke") == "#f8f8f8")
            github_icons_elements[i].setAttribute("stroke", "#262626")
        else
            github_icons_elements[i].setAttribute("stroke", "#f8f8f8")
    }
    
})