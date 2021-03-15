import {Dispatch, SetStateAction, useEffect} from "react"

export const useGeneralRules = (setGeneralRules: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    fetch('data/generalRules.json')
      .then(result => result.json())
      .then(allGeneralRules_ => {setGeneralRules(new Map(Object.entries(allGeneralRules_)))})
  }, [setGeneralRules])
}
