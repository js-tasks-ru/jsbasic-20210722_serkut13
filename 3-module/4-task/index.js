function showSalary(users, age) {

  let filtredUsers = users.filter(function(users){return users.age <= age }) 

  return filtredUsers.map(users =>`${users.name}, ${users.balance}`).join('\n')
}