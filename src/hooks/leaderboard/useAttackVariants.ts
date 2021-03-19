import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useAttackVariants = (setAttackVariants: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    axios.get('data/attackVariants.json')
      .then(result => result.data)
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [setAttackVariants])
}
