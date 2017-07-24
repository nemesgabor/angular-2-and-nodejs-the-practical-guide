var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

// router.get('/', function (req, res, next) {
//     User.findOne({},function(err, doc){
//         if(err){
//             return res.send('Error!');
//         }
//         res.render('node', {email:doc.email});
//     });
//     //res.render('node');
// });

// router.post('/', function(req, res, next) {
//     var email = req.body.email;

//     var user = new User({
//         firstName:'Elek',
//         lastName:'Teszt',
//         password: 'Secret1234',
//         email:email
//     });
//     user.save(function(err, result){

//     });

//     res.redirect('/');
// });

module.exports = router;
