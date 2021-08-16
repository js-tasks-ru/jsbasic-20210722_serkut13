function namify(users) {
  const arr = []
  for (const elem of users) {
    arr.push(elem.name)
  }
  return arr
}