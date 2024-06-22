import axios from "axios";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  onClick: () => void;
};

const Card = ({ title, id, onClick }: CardProps) => {
  function deleteTask() {
    axios.delete(`https://65c3afef39055e7482c16929.mockapi.io/card/${id}`);
  }

  function swapTasks() {
    onClick((prev) => [...prev, title]);
    deleteTask();
  }

  return (
    <div className={styles.inner}>
      <p className={styles.text}>{title}</p>
      <div className={styles.block}>
        <img
          onClick={() => swapTasks()}
          className={styles.img}
          src={"../../public/check.png"}
          alt=""
        />
        <img
          onClick={() => deleteTask()}
          className={styles.img}
          src={"../../public/active.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
