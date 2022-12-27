enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person2 = {
  name: 'Felix',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

person2.role === Role.ADMIN && console.log('Is and admin');