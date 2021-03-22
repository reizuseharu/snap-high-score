import {BaseHighScoreLeaderboard} from "@components/view/leaderboard/BaseHighScoreLeaderboard"
import {ApiScoreAttack} from "@models/ApiScoreAttack"
import {LeaderboardProps} from "@models/LeaderboardProps"
import {convertDateToLocalString} from "@utils/utility"

export const HighScoreLeaderboard = ({scoreAttacks, isLoading}: LeaderboardProps) => {
  const processedScoreAttacks = scoreAttacks.map((apiScoreAttack: ApiScoreAttack) => {
    return {
      id: apiScoreAttack.id,
      attacker: apiScoreAttack.userName,
      score: apiScoreAttack.totalScore,
      scoreParts: {
        special: apiScoreAttack.special,
        size: apiScoreAttack.size,
        pose: apiScoreAttack.pose,
        isTechnique: apiScoreAttack.isTechnique,
        samePokemon: apiScoreAttack.samePokemon
      },
      // @ts-ignore
      submittedOn: convertDateToLocalString(new Date(...apiScoreAttack.submittedOn)),
      platform: `${apiScoreAttack.console} • ${apiScoreAttack.region}`,
      proofLink: apiScoreAttack.proof,
      isVerified: apiScoreAttack.isVerified,
      notes: apiScoreAttack.notes,
    }
  })

  return BaseHighScoreLeaderboard(processedScoreAttacks, isLoading)
}
