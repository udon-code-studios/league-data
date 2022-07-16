import data from "../raw_data/profileicon.js";

const version = data.version;
const info = data.data;

/** Image URLs for profile icons. */
const icons = new Map<number, string>();
for (const [key, value] of Object.entries(info)) {
  icons.set(parseInt(key), `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${value.image.full}`);
}

export { icons };
