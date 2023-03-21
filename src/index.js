import { style } from "d3";
import App from "./scripts/app.js";
import barGraph from "./scripts/barGraph.js";



//could happen inside of a seperate class called spiderChart
    //have function inside called render chart which is where we define all of these variables
    //invoke that render method inside that constructor of spiderChart

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const button = document.getElementById("modal-button");
    const span = document.getElementsByClassName("close")[0];

    button.onclick = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function displayModalAtStart () {
        document.getElementById("modal-button").click();
    };

    displayModalAtStart();
    

    const myApp = document.getElementById("App");
    const newApp = new App(myApp);

    const accordian = document.getElementsByClassName("accordion");
    let i; //without this, we run into i is undefined in the for loop
    for (i = 0; i < accordian.length; i++) {
        accordian[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
})


