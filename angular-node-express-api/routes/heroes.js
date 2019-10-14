var express = require('express');
var router = express.Router();
var HeroService = require("../services/hero.service.js");

router.get('/', async (req, res) => {
    let term = req.query.name;
    try
    {   
        let heroes;
        if(term) {
            heroes = await HeroService.searchHeroes(term);
        } else {
            heroes = await HeroService.getAllHeroes();
        }
        
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
});

router.put("/:id", async (req, res) => {
    let heroId = req.params.id;
    let hero = await HeroService.updateHeroDetails(heroId, req.body);
    res.json(hero);
});

router.post("/", async (req,res) => {
    let newHero = await HeroService.addHero(req.body);
    res.json(newHero);
});

router.delete("/:id", async (req, res) => {
    let heroId = req.params.id;
    await HeroService.deleteHero(heroId);
    res.json();
});

module.exports = router;