const express = require('express');
const router = express.Router();

// @routeGET api/profile
// @descTest route
// @access Public atau Private

router.get('/', (req,res) => res.send('Profile route'));


// export route
module.exports = router;