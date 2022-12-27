const person1: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: 'Felix',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person1.role[1] = 10; // Error: Type 'number' is not assignable to type 'string'
// person1.role.push('admin'); // push is an exception that is allowed in tuples
// person1.role = [0, 'admin', 'user']; // Error: Source has 3 element(s) but target allows only 2
