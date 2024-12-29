import css from "./Options.module.css";
import clsx from "clsx";

const Options = ({ update, totalFeedback, clear }) => {
  return (
    <div className={css.opt}>
      <button
        onClick={() => {
          update("good");
        }}
        className={css.btn}
      >
        Good
      </button>
      <button
        onClick={() => {
          update("neutral");
        }}
        className={css.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          update("bad");
        }}
        className={css.btn}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={clear}
          className={clsx(totalFeedback ? css.btn : css.sort)}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
