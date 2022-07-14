export enum SummonerId {
  Barrier = "SummonerBarrier",
  Cleanse = "SummonerBoost",
  Ignite = "SummonerDot",
  Exhause = "SummonerExhaust",
  Flash = "SummonerFlash",
  Ghost = "SummonerHaste",
  Heal = "SummonerHeal",
  Clarity = "SummonerMana",
  Smite = "SummonerSmite",
  Teleport = "SummonerTeleport",
}

/** Image URLs for summoner spell icons. */
export function SummonerIcon(summoner: SummonerId): string {
  return `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${summoner}.png`;
}
