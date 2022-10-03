interface User {
  name: string;
  age: number;
}

const users: User[] = [];

export const NodejsModuleSingleton = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    users.forEach((user) => console.log(user));
  },
};
