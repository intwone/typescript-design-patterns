interface User {
  name: string;
  age: number;
}

export class TsjsSingleton {
  private static _instance: TsjsSingleton | null = null;
  private users: User[] = [];

  /**
   * Não deve ser possível instanciar essa clase fora dela mesma
   */
  private constructor() {}

  public static get instance(): TsjsSingleton | null {
    if (!TsjsSingleton._instance) {
      TsjsSingleton._instance = new TsjsSingleton();
    }

    return TsjsSingleton._instance;
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
