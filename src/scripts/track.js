class Track {
    constructor(trackInfo, audioFeatures) {
        console.log(trackInfo,audioFeatures);
        this.name = trackInfo["name"];
        let obj = trackInfo.artists[0];
        this.artist = obj["name"];
        this.id = trackInfo["id"];

        this.valence = audioFeatures["valence"];
        this.danceability = audioFeatures["danceability"];
        this.energy = audioFeatures["energy"];
        this.instrumentalness = audioFeatures["instrumentalness"];
        this.acousticness = audioFeatures["acousticness"];
        this.speechiness = audioFeatures["speechiness"];
        this.liveness = audioFeatures["liveness"];
        
        this.loudness = audioFeatures["loudness"];
        this.tempo = audioFeatures["tempo"];
    }
}
    //_ represents " "
    //1 reprsents
    // filteredData() {
    //     data = [ 
    //         Japanese_Denim_1_Daniel_Caesar : {
    //         Name: "Japanese Denim - Daniel Caesar"
    //         Valence: 0.345 ,
    //         Danceability: 0.707,
    //         Energy: 0.238,
    //         Instrumentalness: 0.00000242 ,
    //         Acousticness: 0.0905 ,
    //         Liveness: 0.842, 
    //         Speechiness: 0.0379 
    //         }, 
    //         So_Strange_1_Polyphia: {
    //             Valence: 0.484 ,
    //             Danceability: 0.553 ,
    //             Energy: 0.885 ,
    //             Instrumentalness: 0.00072 ,
    //             Acousticness: 0.000667 ,
    //             Liveness: 0.209,
    //             Speechiness: 0.0385 
    //         },
    //         Get_Away_!_Mac_Ayres:{

    //         }
    //             Valence: 0.322 ,
    //             Danceability: 0.676 ,
    //             Energy: 0.672 ,
    //         Instrumentalness: 0.0000367 ,
    //             Acousticness: 0.287 ,
    //             Liveness: 0.103 
    //         Speechiness: 0.07 
    //     ]   
    // }

export default Track;