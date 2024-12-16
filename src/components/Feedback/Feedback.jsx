import css from "./Feedback.module.css";

const Reverse = ({ good, neutral, bad, totalReverse, positive }) => {
  return (
    <>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalReverse}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
};

export default Reverse;
