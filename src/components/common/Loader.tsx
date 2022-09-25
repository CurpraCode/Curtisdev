import React from "react";
import styles from "./styles/loader.module.css";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
    >
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
          <span id="t1"></span>
          <span id="t2"></span>
          <span id="t3"></span>
          <span id="t4"></span>
          <span id="t5"></span>
          <span id="t6"></span>
          <span id="t7"></span>
          <span id="t8"></span>
          <span className={styles.rotate0}></span>
          <span className={styles.rotate1}></span>
          <span className={styles.rotate2}></span>
          <span className={styles.rotate3}></span>
          <span className={styles.rotate4}></span>
        </div>
      </section>
    </motion.div>
  );
};

export default Loader;
