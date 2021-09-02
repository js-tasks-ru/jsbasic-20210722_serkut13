function getMinMax(str) {

  let arr = str.split(' ').filter(elem => !isNaN(+elem))

  return {min: Math.min(...arr), max: Math.max(...arr)}
}