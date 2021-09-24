const express = require('express');
const router = express.Router();

// @routeGET api/auth
// @descTest route
// @access Public atau Private

router.get('/', (req,res) => res.send('Auth route'));


// export route
module.exports = router;