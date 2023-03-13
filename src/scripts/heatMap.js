//set dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 30, left: 30 }
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

const svg = d3.select("svg"); //selecting the element with the HTML tag "svg"
svg.attr("id", "myGraph"); //giving svg the attribute of id = "id arg"
svg.attr("width", width + margin.left + margin.right)
svg.attr("height", height + margin.top + margin.bottom)

const plot = svg.append("g");
plot.attr("id", "plot");
plot.attr("transform", `translate(${margin.left}, ${margin.top})`);

//labels of row and columns
const audioFeatures = [
    "Valence",
    "Danceability",
    "Energy",
    "Instrumentalness",
    "Acousticness",
    "Liveness"
];
const songs = [
    "Best Part (feat. H.E.R.)",
    "blue",
    "CRAZY - Hidden Track No.V 11월 선정곡",
    "Easily",
    "Get Away",
    "I Wonder",
    "Japanese Denim",
    "So Strange (feat. Cuco)",
    "The One",
    "WESTSIDE"
];

//Build x scales and axis:
const x = d3.scaleBand()
    .range([0, width])
    .domain(audioFeatures)
    .padding(0.01);

svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))

//Build y scales and axis:
const y = d3.scaleBand()
    .range([height, 0])
    .domain(songs)
    .padding(0.01);

svg.append("g")
    .call(d3.axisLeft(y));

//Build color scale
const myColor = d3.scaleLinear()
    .range(["white", "#69b3a2"])
    .domain([1, 100])



let data = [
    bestPart,
    blue,
    crazy,
    easily,
    getAway,
    iWonder,
    japaneseDenim,
    soStrange,
    theOne,
    westside
];