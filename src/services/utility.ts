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

export function endsWithAny(suffixes: Array<string>, word: string) {
  return suffixes.some(function (suffix) {
    return word.endsWith(suffix)
  })
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
});
