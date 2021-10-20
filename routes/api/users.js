const express = require('express');
const router=express.Router();

// @routeGET api/users
// @descTest route
// @accessPublic atau Private

router.get('/', (req, res) => res.send('User route'));
module.exports = router;