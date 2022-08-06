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

export const searchHeroPromise = (id) => {
  const hero = heroes[id];
  return new Promise((resolve, reject) => {
    if (hero) resolve(hero);
    else reject(`No existing hero ${id}`);
  });
};
