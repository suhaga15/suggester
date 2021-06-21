import { useEffect, useState } from "react";
import { salaryValues, storeValues } from "../../constants/formConstants";
import styles from "./form.module.css";

const Form = () => {
  const [selectedSalary, setSalary] = useState<string | null>(null);
  const [selectedStore, setStore] = useState<string | null>(null);
  const [fetchTableData, setFetchTableData] = useState<boolean>(false);

  useEffect(() => {
    if (selectedSalary && selectedStore) {
      setFetchTableData(true);
    }
  }, [selectedSalary, selectedStore]);

  return (
    <>
      <form>
        <div className={styles.formLabel}>What is your salary?</div>
        <div className={styles.formItem}>
          {salaryValues.map((salary) => (
            <span
              className="flex-row justify-center items-center"
              onClick={() => {
                setSalary(salary.value);
              }}
            >
              <input
                type="radio"
                className={styles.formInput}
                checked={selectedSalary === salary.value}
              />
              {salary.label}
            </span>
          ))}
        </div>

        <div className={styles.formLabel}>Where do you shop the most?</div>
        <div className={styles.formItem}>
          {storeValues.map((store) => (
            <span
              className="flex-row justify-center items-center"
              onClick={() => {
                setStore(store.value);
              }}
            >
              <input
                type="radio"
                className={styles.formInput}
                checked={selectedStore === store.value}
              />
              {store.label}
            </span>
          ))}
        </div>
      </form>
      {selectedSalary && selectedStore && <div>Table</div>}
    </>
  );
};

export default Form;
