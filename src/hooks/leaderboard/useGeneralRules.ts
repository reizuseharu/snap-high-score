import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useGeneralRules = (setGeneralRules: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    axios.get('data/generalRules.json')
      .then(result => result.data)
      .then(allGeneralRules_ => {setGeneralRules(new Map(Object.entries(allGeneralRules_)))})
  }, [setGeneralRules])
}
