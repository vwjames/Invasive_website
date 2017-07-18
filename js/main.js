//Manin JavaScript file
function openCity(evt, cityName) {

    document.getElementById("defaultOpen").click();

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].onclick = function(){
       /* Toggle between adding and removing the "active" class,
       to highlight the button that controls the panel */
       this.classList.toggle("active");

       /* Toggle between hiding and showing the active panel */
       var panel = this.nextElementSibling;
       if (panel.style.display === "block") {
           panel.style.display = "none";
       } else {
           panel.style.display = "block";
       }
   }
} 
