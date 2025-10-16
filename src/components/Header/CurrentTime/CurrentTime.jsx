import { useEffect, useState } from "react";
import styles from "./CurrentTime.module.css";
import { getCurrentData } from "../../../scripts.js";

export const CurrentTime = () => {
  const [data, setData] = useState(getCurrentData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getCurrentData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Current UTC time: {data.time}</h2>
      <p className={styles.date}>
        {data.week}, {data.date}
      </p>
    </section>
  );
};
