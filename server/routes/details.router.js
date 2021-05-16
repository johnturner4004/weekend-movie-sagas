const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const id = req.body.id;
  console.log('************************************************************************************************************************************************************************************************');

  console.log('req.body:', req.body);

  const queryString = `SELECT m.*, ARRAY_AGG(g.name) FROM movies AS m
  JOIN movies_genres AS mg ON m.id = mg.movie_id
  JOIN genres AS g ON mg.genre_id = g.id
  WHERE m.id=${id}
  GROUP BY m.id;`;
  console.log(queryString);

  pool.query(queryString)
    .then(result => {
      console.log(result);

      res.send(result.rows);
    })
    .catch(error => {
      console.log(`Error getting details: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router