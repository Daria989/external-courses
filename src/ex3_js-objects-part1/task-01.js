let user = {};
user.name = 'John';
user.age = 30;
user['likes to sing'] = true;
user['likes dancing'] = true;
user[10] = 100;

delete user.age;
delete user['likes to sing'];

console.log(user);