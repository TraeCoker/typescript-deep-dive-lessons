enum Role {ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Big Moe",
    age: 44,
    hobbies: ['Running', 'Not Running'],
    role: Role.ADMIN
};

// person.role.push('admin')
// person.rol[1] = 10;

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};

if (person.role === Role.ADMIN){
    console.log('is Admin');
};