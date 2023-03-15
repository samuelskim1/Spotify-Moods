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


    //graph needs:
        //a title that has both the song title and artist
        //An array with subarrays of the following
            //valence, danceability, energy, acousticness, liveness, speechiness

    filteredAudioFeatures () {
        const array = [
            ["Valence", this.valence],
            ["Danceability", this.danceability],
            ["Energy", this.energy],
            ["Acousticness", this.acousticness],
            ["Liveness", this.liveness],
            ["Speechiness", this.speechiness]
        ];

        console.log("audiofeatures have been filtered")
        return array;
    }

    filteredTrackInfo () {
        const axisTitle = `${this.name}` + ' - ' + `${this.artist}`
        console.log("trackinfo has been filtered")
        return axisTitle
    }

}



export default Track;