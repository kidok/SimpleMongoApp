var express = require('express');
var router = express.Router();

var user = require('../models/user').user;


/* GET users listing. */
router.get('/', function(req, res, next) {
    user.findOne({ userid: 123 }, (err, obj) => {
        if (obj == null) {
            new user({
                userid: 123,
                name: 'testuser123'
            }).save(function(err) {
                if (err) // ...
                    console.log(err);
                res.send('saved user 123!');
            });
        } else {
            res.send('user123: ' + JSON.stringify(obj));
        }
    })
});

module.exports = router;