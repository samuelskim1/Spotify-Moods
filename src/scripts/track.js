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

export default Track;