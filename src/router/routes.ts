import { RouteRecordRaw } from 'vue-router';

//根据页面文件自动创建多层级路由
function generateRoutes() {
  //Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
  //../pages/**/*.vue 查询pages文件夹以及子文件夹
  const modules = import.meta.glob('../pages/**/*.vue');
  const INGORED = ['ErrorNotFound.vue'];
  return Object.keys(modules)
    .filter((item) => !INGORED.includes(item.split('/').pop() as string))
    .map((key) => {
      const fileNames = key.split('/').pop() as string;
      const name = fileNames.substring(0, fileNames.length - 4);
      const path = '/' + name.toLocaleLowerCase();

      return {
        path,
        name,
        component: modules[key],
      };
    });
}

console.log(generateRoutes());

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'IndexPage',
    children: generateRoutes(),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

//ts
/**
interface Person<T> {
  alias?: string[]; //可选属性
  age: number;
  name: string;
  hello?: (msg: string) => string;
  t: T;
}

// const lili: Person<string> = {
//   age: 12,
//   name: 'lili',
//   hello(msg) {
//     return this.name + msg;
//   },
// };

//别名==>相当于继承 interface P extends Person{}
type P = Person<string>;

//可以添加属性
type IP = Person<number> & {
  title: string;
};

//T number | string 根据传入泛型类型确认返回值类型
function func<T>(options: Person<T>): T extends number ? 'typea' : 'typeb' {
  //泛型
  return options.t as T extends number ? 'typea' : 'typeb';
}

func({
  name: 'lili',
  age: 12,
  t: 7,
});

function test(arg: string | number) {
  //类型断言(明确类型)
  (arg as string).substring;
  //写法二
  (<string>arg).substring;
}

*/
