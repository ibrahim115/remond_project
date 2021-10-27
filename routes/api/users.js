const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/users
// @desc Register user
// @access Public

router.post('/', [
  // .not().is Empty => validation!
  check('name', 'Nama harus di isi').not().isEmpty(),
  check('email', 'Isi dengan valid email').isEmail(),
  check('password', 'Isi password minimal 6 atau lebih karakter').isLength({min: 6})],
  (req,res) => {
    // handle request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {return res.status(400).json({errors: errors.array() });
  }

  res.send('User route')
});

// export route
module.exports = router;