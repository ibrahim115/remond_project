const express = require('express');
const router = express.Router();

// @routeGET api/posts
// @descTest route
// @access Public atau Private

router.get('/', (req,res) => res.send('Posts route'));


// export route
module.exports = router;