function sumSalary(salaries) {
  let sum = 0
  for (const key in salaries) {
    if (typeof (salaries[key]) === 'number' && (salaries[key]) !== Infinity && (salaries[key]) !== -Infinity && isNaN(salaries[key]) !== true) {
      sum = sum + salaries[key]
    }
  }
  return sum
}