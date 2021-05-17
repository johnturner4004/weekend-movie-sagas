[x] - create database
[x] - run database queries

[x] - install; run client and server

[ ] - Home/List page
  [ ] - Research grids for your movie posters on the Movie List page
  [ ] - when a poster is clicked -> /details view for that movie
  [ ] - way to nav to add movie page
  [ ] - Invest some time in styling it up!
  
[x] - details page
  [x] - dispatch to saga
  [x] - Post request with db query
  [x] - store data in redux
  [x] - shows all details **including ALL genres** for the selected movie. 
    > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?
  [ ] - Research cards for your movie posters on the list page
    [ ] - data to card
  [x] - details page should have a `Back to List` button to get back to the Home page

[ ] - add movie page
  [ ] - input fields
    [x] - title
    [ ] - poster image URL (images folder)
      [ ] - poster preview
    [ ] - textarea for description
    [ ] - genres dropdown
  [ ] - cancel button -> Home
  [ ] - save button - update title and description in the database -> return to Home
    [ ] - dispatch post through saga
    [ ] - INSERT INTO
      [ ] - movie table
      [ ] - movies_genres table

[ ] Comment your code.
[ ] Update this README to include a description of the project in your own words.