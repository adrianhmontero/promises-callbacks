import { searchHero } from "./js/callbacks";
import "./styles.css";

const heroId = "spiderMan";
searchHero(heroId, (err, hero) => {
  if (err) console.error(err);
  else console.info({ hero });
});
