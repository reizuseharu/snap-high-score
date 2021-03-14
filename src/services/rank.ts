import first from "@assets/img/1st.png"
import second from "@assets/img/2nd.png"
import third from "@assets/img/3rd.png"
import fourth from "@assets/img/4th.png"
import {OptionalNumber} from "@utils/constants"

function scoresToRanks(scores: number[]): Map<number, number> {
  let sorted = scores.slice().sort((a: number, b: number) => { return b - a })
  return new Map(scores.map((score: number) => { return [score, sorted.indexOf(score) + 1]}))
}

export function scoreToRank(score: number, scores: number[]) {
  let ranks = scoresToRanks(scores)
  return ranks.get(score)
}

export function scoreToRankColor(score: number, scores: number[]) {
  let rank = scoreToRank(score, scores)
  return rankColor(rank)
}

export function rankColor(rank: OptionalNumber) {
  let color: string

  if (rank === 1) {
    color = "#FFD700"
  } else if (rank === 2) {
    color = "#D9D9D9"
  } else if (rank === 3) {
    color = "#CD7F32"
  } else if (rank === 4) {
    color = "#FF0800"
  } else {
    color = "#000000"
  }
  return {
    color: color,
    border: 0
  }
}

export function scoreToRankImage(score: number, scores: number[]) {
  let rank = scoreToRank(score, scores)
  return rankImage(rank)
}

export function rankImage(rank: OptionalNumber) {
  let image: string

  if (rank === 1) {
    image = first
  } else if (rank === 2) {
    image = second
  } else if (rank === 3) {
    image = third
  } else if (rank === 4) {
    image = fourth
  } else {
    image = ""
  }

  return image
}

export function rankBackgroundColor(index: number) {
  if (index % 2 === 1) {
    return {backgroundColor: "#666666", opacity: 0.9, border: 0}
  } else {
    return {backgroundColor: "#444444", opacity: 0.7, border: 0}
  }
}
