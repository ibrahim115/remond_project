const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register user
// @access Public atau Private

router.post('/', (req,res) => {
  // test request
  console.log(req.body);
  
  res.send('User route')
});


// export route
module.exports = router;