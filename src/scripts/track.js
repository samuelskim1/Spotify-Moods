class Track {
    constructor(trackInfo, audioFeatures) {

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

    filteredAudioFeatures () {
        const array = [
            ["Valence", this.valence],
            ["Danceability", this.danceability],
            ["Energy", this.energy],
            ["Acousticness", this.acousticness],
            ["Liveness", this.liveness],
            ["Speechiness", this.speechiness]
        ];
        return array;
    }

    filteredTrackInfo () {
        const axisTitle = `${this.name} - ${this.artist}`;
        return axisTitle;
    }

}



export default Track;