import TableCell from "@material-ui/core/TableCell"
import {TableCellProps} from "@material-ui/core/TableCell/TableCell"
import {rankColor, rankImage, scoreToRank} from "@services/rank"
import {ordinal_suffix_of} from "@utils/utility"

interface LeaderboardTableRankCellProps {
  index: number
  ranks: number[]
  score: number
}

export const LeaderboardTableRankCell = (props: TableCellProps & LeaderboardTableRankCellProps) => {
  let rank = scoreToRank(props.score, props.ranks)
  let rankColorStyle = rankColor(rank)
  let rankImageSource = rankImage(rank)
  return (
    <TableCell align="center" style={rankColorStyle}><img src={rankImageSource} alt=""/>{ordinal_suffix_of(rank!!)}</TableCell>
  )
}
