import { ClassicSingleton } from './classic-singleton';
import { database1 } from './classic-singleton-module1';

const database2 = ClassicSingleton.getInstance();

database2?.add({ name: 'Cicero', age: 10 });
database2?.add({ name: 'Vilma', age: 20 });
database2?.add({ name: 'Catia', age: 30 });
database2?.show();

console.log(database1 === database2);
