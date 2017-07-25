//Manin JavaScript file
var x = 1;

function openCity(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

function openSolution(evt, solution) {

    var i, sidecontent, sidelinks;

    sidecontent = document.getElementsByClassName("sidecontent");
    for (i = 0; i < sidecontent.length; i++) {
        sidecontent[i].style.display = "none";
    }

    sidelinks = document.getElementsByClassName("sidelinks");
    for (i = 0; i < sidelinks.length; i++) {
        sidelinks[i].className = sidelinks[i].className.replace(" active", "");
    }

    document.getElementById(solution).style.display = "block";
    evt.currentTarget.className += " active";

    if (solution === "dig") {
        x = 1;
    } else if (solution === "cover") {
        x = 2;
    } else if (solution === "weedkiller") {
        x = 3;
    } else if (solution === "bio") {
        x = 4;
    }
    
    var defaultOpen = document.getElementsByClassName("defaultOpen");
    defaultOpen[x - 1].click();
}

document.getElementById("open").click();