# js_project

JS Project Proposal: Spotify Moods

## Background ##

Spotify Wrapped has been a viral marketing campaign amongst Spotify (one of the leading music streaming service providers) users over the past 7 years. It allows its users to view their activity on the platform of over the past year through creative 
and engaging visualizations of their data. This project will dive deeper in the Spotify API and create a data visualization of the raw audio data that Spotify collects from songs. 

Spotify's API allows developers to view extra various audio features of a song. This is not an extensive list of all the features but the ones that will be visualized are these:

- Danceability
   -Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity
- Instrumentalness
   -Predicts whether a track contains no vocals.
- Valence
   -A measure describing the musical positiveness conveyed by a track
- Energy
   -Represents a perceptual measure of intensity and activity
- Acousticness
   -A confidence measure of whether the track is acoustic
- Liveness
   -Detects the presence of an audience in the recording
- Loudness
   -The overall loudness of a track in decibels (dB)
- Speechiness
   -Presence of spoken words in a track


Thie project will display the value of these features for a song on multiple graphs. A lot of these categories and their values can be indicators of the user's mood/taste profile. 

## Functionality & MVPs ##

With this project, users will be able to: 
- Render analysis/analytics for song(s)
- Select between which songs they would like to be displayed
  - When selecting a singular song, they will be able to see data visualizations some of these categories in specific sections of a song
- View the differences between the songs when selecting all the songs to be displayed as they are rendered on top of each other

In addition, this project will include:
- An About model describing the background of these specific features and what they represent
-A production README

## Wireframe ##

  <img width="515" alt="JS Project Wireframe" src="https://user-images.githubusercontent.com/116222606/224135459-064283e9-fa37-4a13-b61a-3a4dad696c54.png">


- Nav links include links to this project's Github repo, my LinkedIn, and the About modal
- The Song Selector will allow the user to add/remove the graph of a song in the list of songs provided
- On the right underneath the controls, there will be an Avatar that will perform certain animations that represent the overall mood based off the average of audio feature values
- On the left:
   - there will be a dropdown for each song that contains the description/blurb the artist provided
      - Implement this using a carousel(JS) (BONUS)
   - there will be a list of non-graphical audio features such as the key, time-signature, tempo, and the duration of songs
      - Implement this using a carousel(JS) or another suitable animation (BONUS)
   - there will a description of every audio feature displayed in this project
      - Implement this using a carousel(JS) (BONUS)

- Controls will start off by having a reset button which will clear the main graph
   - It will have a Show/Hide Avatar (the Person Icon) Option (BONUS)
   - It will have a play song button (BONUS)
   
## Technologies, Libraries, APIs ##

This project will be implemented with the following technologies:
- The D3 and CANVAS API to create graphs and shapes that dynamically presents the data from the Spotify API
- Webpack to bundle and transpile the source JavaScript code
-npm to manage project dependencies

## Implementation Timeline ##

- **Friday Afternoon & Weekend**: Finish researching the D3/Canvas library and figure out which type of graph will best represent my main graph. Finish setting up project, including getting webpack up and running. Implement logic to display the audio features of a singular song in the main graph. Spend time to really get comfortable with the D3 and Canvas API.

- **Monday**: Implement logic to display the audio features of certain segments of that singular song in the graphs. Implement logic to only display the graphs of segments of songs that selected. Begin to start implementing the logic for retrieving/displaying multiple songs on the main graph.

- **Tuesday**: Implement Song Selector functionality. Implement logic to display the description of songs by artists, brief definition of audio features, non-graphical audio feature of songs. Start styling up these displays

- **Wednesday**: Finish implementing user controls. Fix up and go all out on styling/different color schemes. If I have extra time, I will start on bonus features. 

- **Thursday Morning**: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

## Bonus features ##
There are many directions that this projects could eventually go. Some anticipated updates are:
- Implementing carousels for all of the description displays 
- Implement an avatar that performs animations based of the overall mood of the songs
- Implement the ability to add songs and user playlists

 
