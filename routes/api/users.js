const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
// (1): require user Model
const User = require('../../models/User');

const gravatar = require ('gravatar');
const bcrypt = require('bycriptjs');

// @route POST api/users
// @desc Register user
// @access Public atau Private

router.post('/', [ 
  check ('name', 'Nama harus di isi').not().isEmpty(),
  check ('email', 'Isi dengan valid email').isEmail(),
  check('password', 'Isi password minimal 6 atau lebih karakter').isLength({min: 6})],
  // (2): menggunakan promise async/await
  async(req,res) => {
    //handle request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // (3): membuat variable menggunakan destructure
    const { name, email, password } = req.body;

    // (4): membuat try catch
    try {
      let user = await User.findOne({ email });
      // user exis
      if (user){
        return res.status(400).json({ errors: [{msg: "User email sudah terdaftar"}]})
      }

      // get user avatar
  const avatar = gravatar.url(email, {
    s: '200', // size
    r: 'pg', // reading
    d: 'mm' //default
  })
  user = new User({
    name,
    email,
    avatar,
    password
  });

  // Encrypt password dengan bycript
  // membuat format hash dengan "salt"
  const salt = await bcrypt.genSalt(10)

  user.password = await bcrypt.hash(password, salt);
  
  await user.save();

      res.send('User Register')
    } catch(err) {
      console.error(err.message);
      res.status(500).send("server error")
    }

  
});


// export route
module.exports = router;