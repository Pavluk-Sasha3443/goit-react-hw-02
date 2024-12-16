import css from "./Notification.module.css";

const Notification = ({ totalFeedback }) => {
  return <p className={css.tetx}>{!totalFeedback ? `No feedback yet` : ``}</p>;
};
export default Notification;
