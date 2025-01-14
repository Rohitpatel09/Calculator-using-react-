import styles from "./RestEqualButton.module.css";

const RestEqualButton = ({ click }) => {
  return (
    <div className={styles.resetequalbutton}>
      <button onClick={() => click("C")}>REST</button>
      <button onClick={() => click("=")}>=</button>
    </div>
  );
};

export default RestEqualButton;
