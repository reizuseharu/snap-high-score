import {Dispatch, SetStateAction, useEffect} from "react"

export const useAttackVariants = (setAttackVariants: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    fetch('data/attackVariants.json')
      .then(result => result.json())
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [setAttackVariants])
}
