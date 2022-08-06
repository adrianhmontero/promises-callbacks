import { searchHero } from "./js/callbacks";
import { searchHeroPromise } from "./js/promises";
import "./styles.css";

const heroId = "spiderMan";
const heroId2 = "caps";
const heroId3 = "ironMan";
searchHero(heroId, (err, hero) => {
  if (err) console.error(err);
  else console.info({ hero });
});

/* searchHeroPromise(heroId2)
  .then((res) => console.log(res))
  .catch((e) => console.log(e)); */

Promise.all([
  searchHeroPromise(heroId2),
  searchHeroPromise(heroId),
  searchHeroPromise(heroId3),
])
  .then(([hr1, hr2, hr3]) =>
    console.log(`Sending ${hr1.aka}, ${hr2.aka} & ${hr3.aka} to war`)
  )
  .catch((err) => alert(err))
  .finally(() => console.log("Promise.all finished"));
