const mappedUsers = users.map(user=>({
    email:user.email,
    companyName: user.company.name
}))

console.log(mappedUsers);

