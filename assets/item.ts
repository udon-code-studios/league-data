import data from "../raw_data/item.js";

const version = data.version;
const info = data.data;

/** Image URLs for item icons. */
const icons = new Map<number, string>();
for (const [key, value] of Object.entries(info)) {
  icons.set(parseInt(key), `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${value.image.full}`);
}

export { icons };
