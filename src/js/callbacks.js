const heroes = {
  cap: {
    name: "Steve Rogers",
    aka: "Captain America",
    power: "Handle injections without dying",
  },
  ironMan: {
    name: "Tony Stark",
    aka: "Iron Man",
    power: "Having money (Stupidly)",
  },
  spiderMan: {
    name: "Peter Parker",
    aka: "Spider-man",
    power: "Throw webs from wrists (And somewhere else)",
  },
};

export const searchHero = (id, callback) => {
  const hero = heroes[id];
  if (hero) callback(null, hero);
  else callback(`No existe un héroe ${id}`);
};
