# Interview Scheduler

Interview Scheduler is a single-page web application built using React that allows users to book, edit, and cancel interviews with selected interviewers.

## Features

* Users can book interviews for any available time slot on any selected day of the week.
* Users can edit the student name and interviewer for an existing appointment.
* Users can cancel an existing appointment.
* Multiple users can use the application simultaneously without interfering with each other's data.
* Error handling is in place for any unexpected scenarios.

## Tech Stack

React
Axios
WebSockets
Storybook
Jest
Cypress

## Setup

* Fork and clone the repository.
* Install dependencies using the npm install command.
* Start the development web server using the `npm start` command. The app will be served at http://localhost:8000.
* Start the WebSocket server in a new terminal window using the `npm run start:server` command.
* Visit http://localhost:8000 in your browser to start using the application.

## Screenshots

https://github.com/eliomags/-scheduler/blob/master/Screenshot%202023-03-22%20at%2010.43.48%20PM.png



Screenshot of the Interview Scheduler home page
https://github.com/eliomags/-scheduler/blob/master/docs/Screenshot%202023-03-22%20at%2010.43.48%20PM.png?raw=true

Screenshot of booking an interview
https://github.com/eliomags/-scheduler/blob/master/docs/Screenshot%202023-03-22%20at%2010.44.24%20PM.png?raw=true

https://github.com/eliomags/-scheduler/blob/master/docs/Screenshot%202023-03-22%20at%2010.44.54%20PM.png?raw=true

Screenshot of deleting an interview
https://github.com/eliomags/-scheduler/blob/master/docs/Screenshot%202023-03-22%20at%2010.45.24%20PM.png?raw=true

## Storybook

This project includes a Storybook implementation that can be used to view individual React components in isolation.

To launch Storybook, run the `npm run storybook` command and visit http://localhost:9009 in your browser.

## Running Tests

This project includes both unit and end-to-end tests using Jest and Cypress.

To run the unit tests, use the `npm test` command.

To run the end-to-end tests, ensure that the development and WebSocket servers are both running, then use the `npm run cypress` command and select the desired test to run in the Cypress Test Runner.

## Dependencies

* Axios
* Classnames
* Normalize.css
* React
* React-dom
* React-scripts

## Dev Dependencies

* @babel/core
* @storybook/addon-actions
* @storybook/addon-backgrounds
* @storybook/addon-links
* @storybook/addons
* @storybook/react
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/react-hooks
* Babel-loader
* Cypress
* Prop-types
* React-test-renderer

## Aknowledgment 
This project was created as part of the Lighthouse Labs Web Development Bootcamp.