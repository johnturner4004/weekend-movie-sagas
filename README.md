![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Movie sagas

## Description

_Week 12 weekend challenge_

This will display a list of movies and their corresponding posters from data in the database. It will store data from the database in a redux store and use sagas to communicate with the server. 

Upon loading the user will see the collection of movies with their names and posters. If a user clicks on a image or its title, they will directed to a details page that has the title and poster but also has that movie's description and genre(s). A close button on the bottom of the page will return the user to the homepage. 

There is an add movie button that takes the user to a page with a form the user can fill out to add a new movie. Upon submitting the movie data will be added to the database, the input fields will be cleared, the redux store will be refreshed, and the user will be redirected back to the homepage. There is also a cancel button that will clear the input fields and return the user to the homepage.

## Installation

After downloading source files, ensure you have postgresql installed and running. If need to install postgresql, fitst install [Brew](https://brew.sh/) then run:
```
brew install postgresql
```
After installation enter 
```
brew services start postgresql
```
to get it running.

data.sql contain the sql commands to run in your database application to set up the database for this app. 

Finally run
```
npm install
```
then 
```
npm run server
```
and in a separate terminal or terminal tab run
```
npm run client
```

## Built With

- HTML
- CSS
- JavaScript
- React
- Redux
- Axios
- Node.js
- postgresql

## Support
If you have suggestions or issues, please email me at [johnturner4004@gmail.com](mailto:johnturner4004@gmail.com)