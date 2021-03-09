import {ScoreAttack} from "../services/ScoreAttack"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

const scoreAttacks: ScoreAttack[] = [
  { attacker: "quo", score: 10000, submittedOn: "2021-01-16", platform: "NTSC-J • N64", proofLink: "https://youtu.be/5QfAKkI1pq4", isVerified: true },
  { attacker: "aKaFuKu", score: 10000, submittedOn: "2017-01-30", platform: "NTSC-J • N64", proofLink: "https://s3.eu-west-2.amazonaws.com/cyberscoreproofs/Proofs/25450/1306266.jpg", isVerified: true },
  { attacker: "packattack", score: 10000, submittedOn: "2005-04-15", platform: "NTSC-U • N64", proofLink: null, isVerified: true },
  { attacker: "feketerigo", score: 10000, submittedOn: "2018-12-01", platform: "NTSC-U • N64", proofLink: "/proofs/32216/1478993.jpg", isVerified: true },
  { attacker: "reizu", score: 12000, submittedOn: "2021-03-06", platform: "NTSC-J • N64", proofLink: null, isVerified: false },
  { attacker: "CJItsAllGewd_", score: 9999, submittedOn: "2020-01-01", platform: "NTSC-J • N64", proofLink: null, isVerified: true },
]

export const ReportLeaderboard = () => {
  return BaseHighScoreLeaderboard(scoreAttacks)
}
