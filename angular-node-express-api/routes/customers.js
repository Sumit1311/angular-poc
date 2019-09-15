var express = require('express');
var CustomerService = require("../services/customer.service");

var router = express.Router();

/* GET a guid. */
router.post('/', async function(req, res, next)
{
    const body = req.body;

    try
    {
        console.log(body);
        const customer = await CustomerService.create(body);

        if(body.guid != null)
        {
            customer.guid = body.guid;
        }
        res.cookie("guid", customer.guid, {
            maxAge : 900000,
            httpOnly : true
        });

        return res.status(201).json({customer : customer});

    }
    catch(err)
    {
        if(err.name == "ValidationError")
        {
            return res.status(400).json({error : err.message});
        }
        return next(err);
    }
});

router.get('/', async function(req, res, next) {
    res.json({error: "Invalid Customer UID."});
});

router.get('/:id', async function(req, res, next) {
    try
    {
        const customer = await CustomerService.retrieve(req.params.id);

        return res.json({customer : customer});
    }
    catch(err)
    {
        return next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try
    {
        const customer = await CustomerService.update(req.params.id, req.body);

        return res.json({customer : customer});
    }
    catch(err)
    {
        return next(err);
    }
});

router.delete('/:id', async function(req, res, next) {
    try
    {
        const customer = await CustomerService.delete(req.params.id);

        return res.json({success : true});
    }
    catch(err)
    {
        return next(err);
    }
});



module.exports = router;