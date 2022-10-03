import { ClassicSingleton } from './classic-singleton';

const database1 = ClassicSingleton.getInstance();

database1?.add({ name: 'Jose', age: 10 });
database1?.add({ name: 'maria', age: 20 });
database1?.add({ name: 'Amanda', age: 30 });
database1?.show();

export { database1 };
