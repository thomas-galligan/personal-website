function darkMode() {
    document.body.style.background="#333";
    document.getElementById("name").style.color="white";
    document.getElementById("job_title").style.color="white";
    
    let links = document.getElementsByTagName("a")
    for (let i=0; i<links.length;i++) {
        links[i].style.color = "white"
    }

    let linksHover = document.querySelectorAll("a:hover");
    for(let i=0; i<linksHover.length;i++){
        linksHover[i].style.color="#32b0a1";
    }

    document.getElementById("darkModeButton").innerHTML = "Light Mode";
    document.getElementById("darkModeButton").style.border="solid white";
    document.getElementById("darkModeButton").setAttribute("onClick","lightMode()");
}

function lightMode() {
    document.body.style.background="white";
    document.getElementById("name").style.color="#333";
    document.getElementById("job_title").style.color="#333";
    
    var links = document.getElementsByTagName("a")
    for (let i=0; i<links.length;i++) {
        links[i].style.color = "#333"
    }
    
    var linksHover = document.querySelectorAll("a:hover");
    for(let i=0; i<linksHover.length;i++){
        linksHover[i].style.color="#32b0a1";
    }

    
    document.getElementById("darkModeButton").innerHTML = "Dark Mode";
    document.getElementById("darkModeButton").style.border="solid #333";
    document.getElementById("darkModeButton").setAttribute("onClick","darkMode()");

}