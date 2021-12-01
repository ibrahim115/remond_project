const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/Users');

// @routeGET api/auth
// @descTest route
// @accessPublic atau Private

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;