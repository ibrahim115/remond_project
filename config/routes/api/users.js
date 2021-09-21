const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test route
// @access Public atau Private

router.get('/', (req,res) => res.send('User route'));


// export route
module.exports = router;