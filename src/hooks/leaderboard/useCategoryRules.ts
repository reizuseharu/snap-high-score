import {Dispatch, SetStateAction, useEffect} from "react"

export const useCategoryRules = (setAllCategoryRules: Dispatch<SetStateAction<Map<string, string[]>>>) => {
  useEffect(() => {
    fetch('data/categoryRules.json')
      .then(result => result.json())
      .then(allCategoryRules_ => {setAllCategoryRules(new Map(Object.entries(allCategoryRules_)))})
  }, [setAllCategoryRules])
}
