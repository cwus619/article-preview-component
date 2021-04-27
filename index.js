const shareBtn = document.querySelector(".share-btn");
shareBtn.addEventListener("click", function(){
    const shareOptions = document.querySelector(".social-media");
    const shareBtn = document.querySelector(".share-btn");
    const path = document.getElementById("share-btn")

    if (shareOptions.style.display === ""){
        shareOptions.style.display = "flex";
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
        path.style.fill = "white";
    } else {
        shareOptions.style.display = "";
        shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
        path.style.fill = "#6e8098";
    }
})
