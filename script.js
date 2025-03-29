document.querySelectorAll(".game button").forEach(button=>{
    button.addEventListener("click",function(e) {
        const target=e.target
        target.classList.toggle("pressed");
    });
});

document.getElementById("reset").addEventListener("click",function(){
        document.querySelectorAll(".game button").forEach(button=>{
            button.classList.remove("pressed");
            button.classList.add("not-pressed");
        });
    });