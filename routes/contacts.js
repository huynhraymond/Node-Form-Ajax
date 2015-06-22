
var router = require('express').Router();

router.get('/', function(req, res) {
    //console.log(req);

    res.json( {
        message: 'IMPL_101_GET'
    });
});

router.post('/', function(req, res) {

    var accepts = req.get('accept');

    if ( accepts.indexOf('text/html') !== - 1 ) {
        res.render('contact', {user: req.body} );

    }

    else {
            res.status(200).json( {
            message: 'Request contact from front end...',
            received: req.body
        });
    }

    //console.log(req.get('Content-Type'));

    //console.log('html: ' + req.is('html'));
    //console.log('application: ' + req.is('application/*'));


    //console.log(req);
});



module.exports = router;
