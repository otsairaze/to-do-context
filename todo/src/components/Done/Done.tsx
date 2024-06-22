import styles from "./Done.module.css";

type DoneProps = {
  title: string;
};

const Done = ({ title }: DoneProps) => {
  return (
    <div className={styles.inner}>
      <p className={styles.text}>{title}</p>
    </div>
  );
};

export default Done;
