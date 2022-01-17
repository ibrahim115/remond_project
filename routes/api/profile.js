const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require ('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/Users');
const { compareSync } = require('bcryptjs');

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

// @route  Post api/profile/me
// @desc   Create or Update users profile
// @access Private

router.post('/', [
  auth, 
  [
  check('status', 'Status is required')
    .not()
    .notEmpty(),
  ] 
                ], 
async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedln
        } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;

    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }
    console.log(profileFields.skills);
    res.send(profileFields.skills);

});

// export route
module.exports = router;