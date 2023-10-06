![alt text](img/moonpig-logo.png 'Moonpig')

# Frontend Technical Challenge

'*We've been asked to rebuild the Moonpig website using the latest best practices and you are part of a team working on the proof of concept. We'd like you to build out a simple page which will display a list of cards that a customer can buy using our API.*'

### User stories:

> As a customer I can view a list of available cards on my mobile, tablet and desktop so that I can celebrate my new job

> As a customer I can view more details of a card so that I can decide it's the right card for me before purchase

## Pages

### Card Listings Page

![Card listings page wireframe](img/cardlist-view.png 'Card listings page wireframe')

### Card Details Page

![Card details page wireframe](img/carddetail-view.png 'Card details page wireframe')

## Prerequisites

This application requires [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com). If using a package manager, the latter ships with the former.

## Installation and Quick start

To run the application,

1. Clone the repository

2. Navigate to the project directory

3. In terminal, run

    $ `cd frontend`

    $ `npm i`

    $ `npm start`

## Tools, libraries and frameworks

This application was bootstraped with [Create React App](https://github.com/facebook/create-react-app) and uses
[Material UI](https://mui.com) Component library for an enhanced User Interface.

It is statically hosted with [Firebase](https://firebase.google.com) at (https://moonpig-frontend-test.web.app/)
and (https://moonpig-frontend-test.firebaseapp.com/).
## Testing

This application uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

To run tests, within `frontend` run:

$ `npm test`

Due to unresolved, local issues with my machine, however, I was not able to configure [Jest](https://jestjs.io) (or other JS Testing framworks) to work correcty.

Had I been able to, I would have conducted more extensive testing of the `CardDetail` and `CardList` components.

Specifically, I would have conducted...

### Positive tests

CardDetail
- Tested the fetch request within `useEffect()` returns `Status 200`.
- Tested that either the cards state is none null/none empty or that Card components appear on screen.
- Tested that either the length of cards state is equal to the number of Card components that appear on screen.

CardList
- Tested that an error is logged in console when the wrong endpoint is used within `useEffect()`
- Tested that the error messages is displayed when the wrong endpoint is used within `useEffect()`
- Tested that no cards are displayed on screen when a wrong endpoint is used within `useEffect()`.

### Negative tests

CardDetail
- Tested the fetch request within `useEffect()` returns `Status 200`.
- Tested that all of the card detail elements render on screen.
- Tested that the image of the card changes when the cursor hovers over the image.

CardList
- Tested that an error is logged in console when a wrong endpoint (incorrect `MoonpigProductId`) is used within `useEffect()`.
- Tested that the error messages is displayed when a wrong endpoint is used within `useEffect()`.
- Tested that none of the card detail elements are displayed on screen when a wrong endpoint is used within `useEffect()`.
