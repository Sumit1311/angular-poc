var heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


module.exports = class HeroService {
    static getAllHeroes() {
        return heroes;
    }
    static getHeroById(id) {
        return heroes.find(hero => hero.id == id)
    }
    static updateHeroDetails(id, hero) {
        let oldHero = HeroService.getHeroById(id);
        oldHero.name = hero.name;
        return oldHero;
    }

    static addHero(hero) {
        let maxId = 0;
        heroes.find(hero => {
            if(hero.id >= maxId) {
                maxId = hero.id
            }
        });
        let newHero = {
            id : maxId + 1,
            name : hero.name
        }
        heroes.push(newHero);
        return newHero;
    }

    static deleteHero(heroId) {
        heroes = heroes.filter((hero) => {
            return hero.id != heroId;
        });
    }
}