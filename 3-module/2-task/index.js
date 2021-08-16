function filterRange(arr, a, b) {
  const filtResult = []
  for (let elem of arr) {
      if ((elem >= a && elem <= b) || (elem >= b && elem <= a)) {
        filtResult.push(elem)
      }
  }
  return filtResult
}
