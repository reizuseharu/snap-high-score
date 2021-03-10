import {Course} from "../models/Course"
import {LeaderboardType} from "../models/LeaderboardType"

export interface LeaderboardAttack {
  type: LeaderboardType
  variants: Array<string>
}

export const ATTACK_VARIANTS = new Map([
  [
    LeaderboardType.POKEMON, [
      "BULBASAUR",
      "CHARMANDER",
      "CHARMELEON",
      "CHARIZARD",
      "SQUIRTLE",
      "METAPOD",
      "BUTTERFREE",
      "KAKUNA",
      "PIDGEY",
      "PIKACHU",
      "SANDSHREW",
      "SANDSLASH",
      "VULPIX",
      "JIGGLYPUFF",
      "ZUBAT",
      "VILEPLUME",
      "DIGLETT",
      "DUGTRIO",
      "MEOWTH",
      "PSYDUCK",
      "MANKEY",
      "GROWLITHE",
      "ARCANINE",
      "POLIWAG",
      "WEEPINBELL",
      "VICTREEBEL",
      "GEODUDE",
      "GRAVELER",
      "RAPIDASH",
      "SLOWPOKE",
      "SLOWBRO",
      "MAGNEMITE",
      "MAGNETON",
      "DODUO",
      "GRIMER",
      "MUK",
      "SHELLDER",
      "CLOYSTER",
      "HAUNTER",
      "ELECTRODE",
      "KOFFING",
      "CHANSEY",
      "KANGASKHAN",
      "GOLDEEN",
      "STARYU",
      "STARMIE",
      "SCYTHER",
      "JYNX",
      "ELECTABUZZ",
      "MAGMAR",
      "MAGIKARP",
      "GYARADOS",
      "LAPRAS",
      "DITTO",
      "EEVEE",
      "PORYGON",
      "SNORLAX",
      "ARTICUNO",
      "ZAPDOS",
      "MOLTRES",
      "DRATINI",
      "DRAGONITE",
      "MEW"
    ],
  ],
  [
    LeaderboardType.COURSE, [
      Course.BEACH,
      Course.TUNNEL,
      Course.VOLCANO,
      Course.RIVER,
      Course.CAVE,
      Course.VALLEY,
      Course.RAINBOW_CLOUD
    ]
  ],
  [
    LeaderboardType.CHALLENGE, [
      "Surfing Pikachu",
      "Stump Pikachu",
      "Pikachu on a Ball",
      "Speed Pikachu",
      "Balloon Pikachu",
      "Flying Pikachu",
      "Gust-using Pidgey",
      "Beach Magikarp",
      "Tunnel Magikarp",
      "Volcano Magikarp",
      "River Magikarp",
      "Cave Magikarp",
      "Valley Magikarp",
      "Fighting Magmar",
      "Jigglypuff on Stage",
      "Jigglypuff Trio on Stage",
      "Graveler Group Dance",
      "The rare Pokemon Mew"
    ]
  ],
  [
    LeaderboardType.REPORT_SCORE, [
      "Highest Score",
      "Lowest Score"
    ]
  ],
  [
    LeaderboardType.TIME_ATTACK, [
      "Highest Score • 1 hour",
      "Highest Score • 2 hours",
      "Highest Score • 3 hours"
    ]
  ]
])
