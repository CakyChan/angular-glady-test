# AngularGladyTest

This project is an Angular project made to apply to a job at Glady.

## Development server

To start a Development server, run `npm install` then `ng serve`. When the server is running you can Navigate to `http://localhost:4200/`.

This app is planned to communicate with an API provided by Glady. You can find this API here `https://gitlab.com/wedoogift-jobs/challenge/-/tree/master/frontend`

## Running unit tests

To execute the running tests you can run `ng test`

## Topic

This is an Angular 14 project that allow users to put a desired value and find a combination of gift cards that match with the desired value.

- If the desired amount is possible, the app will show a list of the cards needed to reach that amount.
- If the desired amount is higher or lower than the possible amounts, the app will auto-correct the desired amount with the nearest possible value
- Is the desired is not possible but in range, the app will allow the user to choose a possible amount next to the desired value

There is also two buttons that the user can use to switch to the previous or next possible amount.

## Components and services

The home of this project is divided into two components :

- **DesiredAmountComponent** : This component will allow the user can to fill the desired amount and also click two buttons to switch to the previous or next possible amount
- **ValidationAmountComponent** : This component will allow to submit the desired amount and show all the informations about gift cards combination

The API is called in the **GiftService**.

## Interfaces

The project used two differents interfaces :

- **CalculatorComponentValue** : Combination of value and cards
- **GiftApi** : Results from the API