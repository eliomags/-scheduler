# Interview Scheduler

## Introduction

Scheduler is a web application built with React that allows users to book and manage appointments with interviewers. The app has a clean and intuitive design that makes it easy for users to schedule appointments.

Features

* Book appointments with interviewers.
* Edit existing appointments.
* Cancel appointments.

* Display the days of the week with their corresponding appointments.
* Display the number of appointments available for each day.
* Highlight days with no remaining appointments.
* Display the time for each appointment slot.


Install dependencies using npm install.
Create a new database called scheduler_test using the same process as the The API Server activity.
Run the API server with npm start and reset the test database by making a GET request to http://localhost:8001/api/debug/reset.
Run the scheduler app with npm start.
Run Cypress with npm run cypress.

## Setup

Getting Started

Fork and clone this repository.

Navigate to the project directory in your terminal.
Run `npm install` to install the project's dependencies.

## Running Webpack Development Server

Run `npm start` to start the development server. This will open the app in your default browser at http://localhost:8000.

```sh
npm start
```

## Running Jest Test Framework

The app has been thoroughly tested using unit and end-to-end testing. To run the tests, use the following command:

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Author

Elshan Magsudov

## Acknowledgements

This project was created as part of the Lighthouse Labs Web Development Bootcamp. Special thanks to the instructors, TAs, and mentors who helped along the way.