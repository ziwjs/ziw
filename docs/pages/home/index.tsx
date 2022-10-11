import React from 'react';
import styles from './style.less';
export default function Index() {
  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
      title: '开箱即用',
      txt: '简单易用，降低使用者的代码量',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      txt: '使用 TypeScript 开发，提供完整的类型定义文件',
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
      title: '预设行为',
      txt: '更少的代码，更少的 Bug',
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
      title: '简单易用',
      txt: '在 Ant Design 上进行了自己的封装，更加易用',
    },
  ];
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Ziw</h1>
            <p className={styles.description}>体验极速&nbsp;&nbsp;React Web&nbsp;&nbsp;开发体验</p>
            <p className={styles.buttons}>
              <a href="ziw/#/components/">组件</a>
              <a href="https://github.com/ziwjs/ziw">在GitHub上查看</a>
            </p>
          </div>
          <div className={styles.headerRight}>
            <img
              className={styles.headerImage}
              alt="header-image"
              src="https://www.logosc.cn/uploads/icon/2018/05/29//9bc0c657-8248-45f0-b17b-039b6eb6d1b3.png"
            />
            <span className={styles.plus}>+</span>
            <img
              className={styles.headerImage}
              alt="header-image"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            />
          </div>
        </div>
        {/* 功能特性 */}
        <div className={styles.group}>
          <div className={styles.groupTitle}>
            <div />
            <span>主要特性</span>
            <div />
          </div>
          <ul className={styles.features}>
            {characteristics.map((item) => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 80, height: 80 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
