# Spotify Moods

JS Project Proposal: Spotify Moods

## Background ##

Spotify Wrapped has been a viral marketing campaign amongst Spotify (one of the leading music streaming service providers) users over the past 7 years. It allows its users to view their activity on the platform of over the past year through creative 
and engaging visualizations of their data. This project will dive deeper in the Spotify API and create a data visualization of the raw audio data that Spotify collects from songs. 

![image](https://user-images.githubusercontent.com/116222606/225712991-12a890d4-a8f4-45eb-926a-398cd33e79b0.png)


Spotify's API allows developers to view extra various audio features of a song. This is not an extensive list of all the features but the ones that will be visualized are these:

- Danceability
   - Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity
- Valence
   - A measure describing the musical positiveness conveyed by a track
- Energy
   - Represents a perceptual measure of intensity and activity
- Acousticness
   - A confidence measure of whether the track is acoustic
- Liveness
   - Detects the presence of an audience in the recording
- Loudness
   - The overall loudness of a track in decibels (dB)
- Speechiness
   - Presence of spoken words in a track


This project will display the value of these features for a song on multiple graphs. A lot of these categories and their values can be indicators of the user's mood/taste profile. 

![image](https://user-images.githubusercontent.com/116222606/225713287-4ffa471e-855c-432b-ab84-7d6d4ae1e3dc.png)

## Functionality & MVPs ##

With this project, users will be able to: 
- Implementing Client Credentials Flow and properly fetching from Spotify's API

How I am able to fetch and properly render a graph all from the submit button:
- ![image](https://user-images.githubusercontent.com/116222606/225716746-112f3bde-ad74-4059-abbf-c7c486eeb0dc.png)
- ![image](https://user-images.githubusercontent.com/116222606/225717186-6626673d-b110-4467-8fca-f7abbe609f86.png)
- ![image](https://user-images.githubusercontent.com/116222606/225717356-238be6b1-eb14-43ca-80df-b87443de73eb.png)
   - Snippet of my code in my fetchAccessToken method:
      - ![image](https://user-images.githubusercontent.com/116222606/225716943-867ea033-eb19-4879-a7f2-e0dd36a713d1.png)




- Render a graph of audio features for a track by simply submitting a spotify link
- View definitions for the audio features. 
- Implement ways to select between different graphs. 
- Select between which songs they would like to be displayed

In addition, this project will include:
- An About model describing the background of these specific features and what they represent
-A production README

## Wireframe ##

  <img width="470" alt="Second JS Project Wireframe" src="https://user-images.githubusercontent.com/116222606/225642175-d8bf418f-9874-4a4a-b315-9af9059d609d.png">

- Nav links include links to this project's Github repo, my LinkedIn, and the About modal
- On the left:
   - there will be a sidebar with a description for each audio feature
      - Implement this using a accordion (BONUS)

![image](https://user-images.githubusercontent.com/116222606/225713581-9c62c47a-c90b-4641-980c-8487af932e2a.png)

## Technologies, Libraries, APIs ##

This project will be implemented with the following technologies:
- The D3 Library to create graphs and shapes that dynamically presents the data from the Spotify API
- Webpack to bundle and transpile the source JavaScript code
- Npm to manage project dependencies

## Implementation Timeline ##

- **Friday Afternoon & Weekend**: Researched how to pull from Spotify's API through Client Credentials Authorization Flow (Does not require User Login). Began researching D3's Library as a whole. Took a look at different examples presented to figure out the best way to implement my data.

- **Monday**: Implemented logic to dynamically fetching the audio features of a track from a singular Spotify Link. 

- **Tuesday**: Researched and generated a bar graph to represent the audio features of a track from the Spotify Link that was passed in. Started to style the page as a whole.


- **Wednesday**: Implemented my sidebar with the descriptions of the audio features and my Nav Bar.

- **Thursday Morning**: Deployed to GitHub pages.

## Bonus features ##
There are many directions that this projects could eventually go. Some anticipated updates are:
- Implementing the search bar to take in multiple tracks at once and handle playlist links
- Once the number of graphs exceeds a certain point, create a heatmap to better display larger sample sizes
- Implementing an accordion for all of the audio feature descriptions
- Implement a way to select between what tracks to display

 
