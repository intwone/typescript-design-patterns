interface User {
  name: string;
  age: number;
}

export class ClassicSingleton {
  private static instance: ClassicSingleton | null = null;
  private users: User[] = [];

  /**
   * Não deve ser possível instanciar essa clase fora dela mesma
   */
  private constructor() {}

  public static getInstance(): ClassicSingleton | null {
    if (!ClassicSingleton.instance) {
      ClassicSingleton.instance = new ClassicSingleton();
    }

    return ClassicSingleton.instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    this.users.forEach((user) => console.log(user));
  }
}
