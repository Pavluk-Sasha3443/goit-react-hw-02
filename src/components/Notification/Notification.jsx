import css from "./Notification.module.css";

const Notification = ({ totalReverse }) => {
  return <p className={css.tetx}>{!totalReverse ? `No feedback yet` : ``}</p>;
};
export default Notification;
