import { useQuery } from "@tanstack/react-query";
import styles from "./Located.module.css";
import { getIssNow } from "../../api/getIssNow";
import { MapView } from "../MapView";

export const Located = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["iss-now"],
    queryFn: getIssNow,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    keepPreviousData: true,
  });

  const pos = data || { latitude: 0, longitude: 0 };

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.title}>ISS is now located at:</h2>

        {isLoading && <p className={styles.text}>Loading...</p>}
        {isError && <p className={styles.text}>Error: {error.message}</p>}
        {!isLoading && !isError && (
          <p className={styles.text}>
            longitude: {pos.longitude}, latitude: {pos.latitude}
            {isFetching && <span> (updating...)</span>}
          </p>
        )}
      </div>

      <MapView latitude={pos.latitude} longitude={pos.longitude} />
    </section>
  );
};
