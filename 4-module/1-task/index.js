function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (const elem of friends) {
    let friend = document.createElement('li')
    friend.innerHTML = `${elem.firstName}  ${elem.lastName}`
    ul.appendChild(friend)
  }

  return ul
}