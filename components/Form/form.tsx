import { useEffect, useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [salary, setSalary] = useState<string | null>(null);
  const [store, setStore] = useState<string | null>(null);
  const [fetchTableData, setFetchTableData] = useState<boolean>(false);

  useEffect(() => {
    if (salary && store) {
      setFetchTableData(true);
    }
  }, [salary, store]);

  return (
    <>
      <form>
        <div className={styles.formLabel}>What is your salary?</div>
        <div className={styles.formItem}>
          <span
            className="flex-row justify-center items-center"
            onClick={() => {
              setSalary("3-5 lakh");
            }}
          >
            <input
              type="radio"
              className={styles.formInput}
              checked={salary === "3-5 lakh"}
            />
            3-5 lakh
          </span>
          <span
            className="flex-row justify-center items-center"
            onClick={() => {
              setSalary("5-10 lakh");
            }}
          >
            <input
              type="radio"
              className={styles.formInput}
              checked={salary === "5-10 lakh"}
            />
            5-10 lakh
          </span>
        </div>

        <div className={styles.formLabel}>Where do you shop the most?</div>
        <div className={styles.formItem}>
          <span
            className="flex-row justify-center items-center"
            onClick={() => {
              setStore("Amazon");
            }}
          >
            <input
              type="radio"
              className={styles.formInput}
              checked={store === "Amazon"}
            />
            Amazon
          </span>
          <span
            className="flex-row justify-center items-center"
            onClick={() => {
              setStore("Patanjali store");
            }}
          >
            <input
              type="radio"
              className={styles.formInput}
              checked={store === "Patanjali store"}
            />
            Patanjali store
          </span>
        </div>
      </form>
      {salary && store && <div>Table</div>}
    </>
  );
};

export default Form;
