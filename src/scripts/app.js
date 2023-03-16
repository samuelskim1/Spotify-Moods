import Data from "./data";

class App {
    constructor(ele) {
        this.ele = ele
        const data = new Data();
        const button = document.getElementById("submit-button");
        button.addEventListener("click", async function (event) {
            const spotifyInput = document.getElementById("input").value;
            event.preventDefault();
            await data.fetchData(spotifyInput); 
            
            
            /*const fetching =*/
            // new BarChart(fetching)
                //in my barChart class, I would input the data class
                //CHANGE all the fetching methods into class methods (so i dont have to createa  new instance every time)
                //handle my rendering in this barchart
                    //inside constructor

                //d3 stuff will happen in the render method of barChart
                    //that render method will take in the finalized data of the track itself

            document.getElementById("link-form").reset();        
        })
    }

}

export default App;