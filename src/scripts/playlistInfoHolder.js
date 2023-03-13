import Playlist from "./playlist"

class PlaylistInfoHolder {
    constructor(playlistInfo, apiRequestOptions) {
        fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, apiRequestOptions)
            .then(response => response.json())
            .then(playlistTracks=> new Playlist(playlistInfo, playlistTracks, apiRequestOptions))
    }
}

export default PlaylistInfoHolder;