import data from "../raw_data/summoner.js";

const version = data.version;
const info = data.data;

/** Image URLs for summoner spell icons. */
const icons = new Map<number, string>();
for (const [_key, value] of Object.entries(info)) {
  icons.set(parseInt(value.key), `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${value.image.full}`);
}

export { icons };
