function camelize(str) {
  let arr = str.split('-')
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].split('')[0].toUpperCase() + arr[i].slice(1)
  }
  return arr.join('')
}