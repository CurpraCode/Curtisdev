import React from "react";
import styles from "./styles/loader.module.css"

const Loader = () => {
  return (
    <div>
      <section className={styles.section}>
        <svg className={styles.svg}>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10"
            ></feColorMatrix>
          </filter>
        </svg>
        <div className={styles.loader}>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
          <span style="--i:4;"></span>
          <span style="--i:5;"></span>
          <span style="--i:6;"></span>
          <span style="--i:7;"></span>
          <span style="--i:8;"></span>
          <span className={styles.rotate} style="--j:0;"></span>
          <span className={styles.rotate} style="--j:1;"></span>
          <span className={styles.rotate} style="--j:2;"></span>
          <span className={styles.rotate} style="--j:3;"></span>
          <span className={styles.rotate} style="--j:4;"></span>
        </div>
      </section>
    </div>
  );
};

export default Loader;
