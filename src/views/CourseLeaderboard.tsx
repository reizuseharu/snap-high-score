import {ScoreAttack} from "../services/ScoreAttack"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

const scoreAttacks: ScoreAttack[] = [
  { attacker: "kuwhoa", score: 50000, submittedOn: "2021-01-16", platform: "NTSC-J • N64", proofLink: "https://youtu.be/5QfAKkI1pq4", isVerified: true },
  { attacker: "aKaFuShoo", score: 100000, submittedOn: "2017-01-30", platform: "NTSC-J • N64", proofLink: "https://s3.eu-west-2.amazonaws.com/cyberscoreproofs/Proofs/25450/1306266.jpg", isVerified: true },
  { attacker: "packaquack", score: 50001, submittedOn: "2005-04-15", platform: "NTSC-U • N64", proofLink: null, isVerified: true },
  { attacker: "federerigo", score: 10001, submittedOn: "2018-12-01", platform: "NTSC-U • N64", proofLink: "/proofs/32216/1478993.jpg", isVerified: true },
  { attacker: "rayzoo", score: 12000, submittedOn: "2021-03-06", platform: "NTSC-J • N64", proofLink: null, isVerified: false },
  { attacker: "CJItsAllLewd_", score: 9999, submittedOn: "2020-01-01", platform: "NTSC-J • N64", proofLink: "nothing.png", isVerified: true },
]

export const CourseLeaderboard = () => {
  return BaseHighScoreLeaderboard(scoreAttacks)
}
