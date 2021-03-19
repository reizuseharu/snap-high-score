import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useCategoryRules = (setAllCategoryRules: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    axios.get('data/categoryRules.json')
      .then(result => result.data)
      .then(allCategoryRules_ => {setAllCategoryRules(new Map(Object.entries(allCategoryRules_)))})
  }, [setAllCategoryRules])
}
