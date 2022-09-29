import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
export default defineConfig({
  title: 'ziw',
  favicon:
    'https://www.logosc.cn/uploads/icon/2018/05/29//9bc0c657-8248-45f0-b17b-039b6eb6d1b3.png',
  logo: 'https://www.logosc.cn/uploads/icon/2018/05/29//9bc0c657-8248-45f0-b17b-039b6eb6d1b3.png',
  outputPath: 'docs-dist',
  publicPath: '/ziw/',
  base: '/',
  mode: 'site',
  history: {
    type: 'hash',
  },
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  styles: [style],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/ziwjs/ziw',
    },
  ],
  // more config: https://d.umijs.org/config
});
