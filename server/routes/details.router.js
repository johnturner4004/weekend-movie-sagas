const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const id = req.body.id;
  console.log('************************************************************************************************************************************************************************************************');
  
  console.log('req.body:', req.body);
  
  const queryString = `SELECT * FROM movies WHERE id=${id}`;
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