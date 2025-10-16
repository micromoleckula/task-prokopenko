import { useQuery } from "@tanstack/react-query";
import styles from "./TotalAmount.module.css";
import { getAstros } from "../../api/getAstros";
import avatar from "../../assets/ico-avatar-incognito.png";

export const TotalAmount = () => {
  const {
    data: astros = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["astros"],
    queryFn: getAstros,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  const issAstros = astros.filter((item) => item.craft === "ISS");

  if (isLoading)
    return (
      <section className={styles.section}>
        <p>Loading...</p>
      </section>
    );

  if (isError)
    return (
      <section className={styles.section}>
        <p>Error: {error.message}</p>
      </section>
    );

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        {issAstros.map((item) => (
          <div className={styles.human} key={item.name}>
            <img className={styles.img} src={avatar} alt="avatar" />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
        <div className={styles.line}></div>
        <p className={styles.how__much}>
          Total amount: {issAstros.length} people on ISS
        </p>
      </div>
    </section>
  );
};
