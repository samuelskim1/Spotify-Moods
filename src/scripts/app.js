import Data from "./data";

class App {
    constructor(ele) {
        this.ele = ele
        const data = new Data();
        const button = document.getElementById("submit-button"); //grabbing the submit button

        //adding a click listener on button
        button.addEventListener("click", async function (event) {
            const spotifyInput = document.getElementById("input").value;
            //prevent the default behavior of the button/form from going through;
            event.preventDefault();
            //invoke the fetchData method on the link that we passed into the input field'
            /*const fetching =*/ await data.fetchData(spotifyInput); 
            // new BarChart(fetching)
                //in my barChart class, I would input the data class
                //CHANGE all the fetching methods into class methods (so i dont have to createa  new instance every time)
                //handle my rendering in this barchart
                    //inside constructor

                //d3 stuff will happen in the render method of barChart
                    //that render method will take in the finalized data of the track itself
        })
    }

}

export default App;