[x] - create database
[x] - run database queries

[x] - install; run client and server

[ ] - Home/List page
  [ ] - [Stretch]Research grids for your movie posters on the Movie List page
  [x] - when a poster is clicked -> /details view for that movie
  [x] - way to nav to add movie page
  [ ] - Invest some time in styling it up!
  
[x] - details page
  [x] - dispatch to saga
  [x] - Post request with db query
  [x] - store data in redux
  [x] - shows all details **including ALL genres** for the selected movie. 
    > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?
  [ ] - [Stretch] Research cards for your movie posters on the list page
    [ ] - data to card
  [x] - details page should have a `Back to List` button to get back to the Home page

[x] - add movie page
  [x] - input fields
    [x] - title
    [x] - poster image URL (images folder)
      [ ] - [Stretch] poster preview
    [x] - textarea for description
    [x] - genres dropdown
  [x] - cancel button -> Home
  [x] - save button - update title and description in the database -> return to Home
    [x] - dispatch post through saga
    [x] - INSERT INTO
      [x] - movie table
      [x] - movies_genres table

[x] Comment your code.
[x] Update this README to include a description of the project in your own words.