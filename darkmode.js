function darkMode() { 
    document.body.style.background="#333"; // set background to dark gray
    document.getElementById("name").style.color="white";
    document.getElementById("job_title").style.color="white";
    
    let links = document.getElementsByTagName("a") // alter link colors
    for (let i=0; i<links.length;i++) {
        links[i].style.color = "white"
    }

    let linksHover = document.querySelectorAll("a:hover"); // alter hover colors
    for(let i=0; i<linksHover.length;i++){
        linksHover[i].style.color="#32b0a1";
    }

    //change button functionality/appearance
    document.getElementById("darkModeButton").innerHTML = "Light Mode";
    document.getElementById("darkModeButton").style.border="solid white";
    document.getElementById("darkModeButton").setAttribute("onClick","lightMode()");
    document.getElementById("github").src = "img/githubLight.png"
}

function lightMode() { 
    //alter colors
    document.body.style.background="white";
    document.getElementById("name").style.color="#333";
    document.getElementById("job_title").style.color="#333";
    
    // alter links
    var links = document.getElementsByTagName("a")
    for (let i=0; i<links.length;i++) {
        links[i].style.color = "#333"
    }
    
    //alter hover colors
    var linksHover = document.querySelectorAll("a:hover");
    for(let i=0; i<linksHover.length;i++){
        linksHover[i].style.color="#32b0a1";
    }

    // change button functionality/appearance
    document.getElementById("darkModeButton").innerHTML = "Dark Mode";
    document.getElementById("darkModeButton").style.border="solid #333";
    document.getElementById("darkModeButton").setAttribute("onClick","darkMode()");
    document.getElementById("github").src = "img/githubDark.png"

}