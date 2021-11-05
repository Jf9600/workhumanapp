const router = require('express').Router();

router.get('/',function (req,res){
    res.json({content: 'this is the default route for the countries controller.'});

});

module.exports = router;