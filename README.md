# Photo Review

React, Redux, Styled Components are used in this Project.
Unit Testing samples are given

#### `REACT_APP_UNSPLASH=<YOUR_KEY> npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

## Methodology
- While designing the wireframe I made a determination on how the page
  will be divided into components in react.
### Questions
- Will it be cross-platform or responsive.
- Implications of screen orientation


### Steps
-[] Upon loading, the application presents the user with a list of already approved images.
This list would initially be empty for someone who has never used the application before.

-[] Users can add photos by clicking on a + button. Upon clicking on the + button, the user is presented
with an image from the [Unsplash API]. 

-[] Whenever an image is presented, the user can either approve or reject the image.
If an image is rejected, the user is presented with a new image. If the image is approved,
it is added to the list of approved images.

-[] Users should not be presented with images that have been previously rejected at any point.

-[] Application state should persist between page reloads.

-[] Unit Testing - a sample of what good tests look like
