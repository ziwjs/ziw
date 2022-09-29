import React from 'react';
import styles from './style.less';
export default function Index() {
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Ziw</h1>
            <p className={styles.description}>体验轻量级React Web开发体验</p>
            <p className={styles.buttons}>
              <a href="/#/components">组件</a>
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
              src="http://concis.org.cn/images/react-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
