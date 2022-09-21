let panels1 = document.getElementsByClassName("panel");
let panels = document.querySelectorAll(".panel");

console.log(panels, panels1);

for (const panel of panels) {
    panel.addEventListener("click", function(){
        removeActiveClasses()
        panel.classList.add("active")
    })
    
}

function removeActiveClasses(){
    panels.forEach(p => p.classList.remove('active'))
}