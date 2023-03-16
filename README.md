# js_project

JS Project Proposal: Spotify Moods

## Background ##

Spotify Wrapped has been a viral marketing campaign amongst Spotify (one of the leading music streaming service providers) users over the past 7 years. It allows its users to view their activity on the platform of over the past year through creative 
and engaging visualizations of their data. This project will dive deeper in the Spotify API and create a data visualization of the raw audio data that Spotify collects from songs. 

Spotify's API allows developers to view extra various audio features of a song. This is not an extensive list of all the features but the ones that will be visualized are these:

- Danceability
   -Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity
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
-Implementing Client Credientials Flow and properly fetching from Spotify's API
-Render a graph of audio features for a track by simply submitting a spotify link
-View definitions for the audio features. 
-Implement ways to select between different graphs. 
- Select between which songs they would like to be displayed

In addition, this project will include:
- An About model describing the background of these specific features and what they represent
-A production README

## Wireframe ##

  <img width="515" alt="JS Project Wireframe" src="https://user-images.githubusercontent.com/116222606/224135459-064283e9-fa37-4a13-b61a-3a4dad696c54.png">


- Nav links include links to this project's Github repo, my LinkedIn, and the About modal
- On the left:
   - there will be a sidebar with a description for each audio feature
      - Implement this using a accordian (BONUS)

## Technologies, Libraries, APIs ##

This project will be implemented with the following technologies:
- The D3 Library to create graphs and shapes that dynamically presents the data from the Spotify API
-Webpack to bundle and transpile the source JavaScript code
-Npm to manage project dependencies

## Implementation Timeline ##

- **Friday Afternoon & Weekend**: Researched how to pull from Spotify's API through Client Credentials Authorization Flow (Does not require User Login). Began researching D3's Library as a whole. Took a look at different examples presented to figure out the best way to implement my data.

- **Monday**: Implemented logic to dynamically fetching the audio features of a track from a singular Spotify Link. 

- **Tuesday**: Researched and generated a bar graph to represent the audio features of a track from the Spotify Link that was passed in. Started to style the page as a whole.


- **Wednesday**: Implemented my sidebar with the descriptions of the audio features and my Nav Bar.

- **Thursday Morning**: Deployed to GitHub pages.

## Bonus features ##
There are many directions that this projects could eventually go. Some anticipated updates are:
- Implemnting the search bar to take in multiple tracks at once and handle playlist links
- Once the number of graphs exceeds a certain point, create a heatmap to better display larger sample sizes
- Implementing an accordian for all of the audio feature descriptions
- Implement a way to select between what tracks to display

 
