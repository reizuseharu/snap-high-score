export function ordinal_suffix_of(i: number) {
  const j = i % 10
  const k = i % 100

  if (j === 1 && k !== 11) {
    return `${i}st`
  } else if (j === 2 && k !== 12) {
    return `${i}nd`
  } else if (j === 3 && k !== 13) {
    return `${i}rd`
  } else {
    return `${i}th`
  }
}

export function endsWithAny(suffixes: string[], word: string) {
  return suffixes.some(function (suffix) {
    return word.endsWith(suffix)
  })
}

export function toCamelCase(fullWord: string) {
  return fullWord.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

export function toTitleCase(fullWord: string) {
  return fullWord.replace("_", " ").replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}

export function isURLImage(url: string): boolean {
  return url.match(/\.(jpeg|jpg|gif|png)$/) !== null
}

export function isURLVideo(url: string): boolean {
  return url.match(/(mp4|mkv|mov|wmv|avi|webm|html5|youtube|youtu.be)/) !== null
}

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

export const convertDateToUTC = (date: Date) => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}

export const convertDateToLocalString = (date: Date) => {
  const offset = date.getTimezoneOffset()
  const localDate = new Date(date.getTime() - (offset * 60 * 1000))
  return localDate.toISOString().split('T')[0]
}
