import styles from "./Input.module.css";
import btnPlus from "../../../public/Plus.png";
import { useState } from "react";
import axios from "axios";

const Input = () => {
  const [value, setValue] = useState("");

  function addTask(value: string) {
    axios.post("https://65c3afef39055e7482c16929.mockapi.io/card", {
      title: value,
    });
  }

  return (
    <label className={styles.label} htmlFor="input">
      <input
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Add new task"
      />
      <button onClick={() => addTask(value)} className={styles.btn}>
        <img className={styles.img} src={btnPlus} alt="" />
      </button>
    </label>
  );
};
export default Input;
