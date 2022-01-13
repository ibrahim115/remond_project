const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/Users');

// @routeGET api/profile/me
// @descTest get current users profile
// @access Private

router.get('/me',auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate ('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'Tidak ada profile untuk user ini' });
    }

    res.json(profile);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// export route
module.exports = router;