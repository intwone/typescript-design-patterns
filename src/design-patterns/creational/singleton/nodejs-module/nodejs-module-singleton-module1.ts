import { NodejsModuleSingleton } from './nodejs-module-singleton';

NodejsModuleSingleton?.add({ name: 'Jose', age: 10 });
NodejsModuleSingleton?.add({ name: 'maria', age: 20 });
NodejsModuleSingleton?.add({ name: 'Amanda', age: 30 });
NodejsModuleSingleton?.show();

export { NodejsModuleSingleton };
