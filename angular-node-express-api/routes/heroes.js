var express = require('express');
var router = express.Router();
var HeroService = require("../services/hero.service.js");

router.get('/', async (req, res) => {
    try
    {
        let heroes = await HeroService.getAllHeroes();
        res.json(heroes);
    }
    catch(error) {
        throw new Error(error.message);
    }
});

router.get("/:id", async (req, res) => {
    let heroId = req.params.id;
    let hero = await HeroService.getHeroById(heroId);
    res.json(hero);
})

module.exports = router;