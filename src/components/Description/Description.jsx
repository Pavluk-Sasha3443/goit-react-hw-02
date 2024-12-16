import css from "./Description.module.css";
const Description = () => {
  return (
    <div className={css.descr}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback <span className={css.span}>about</span> our
        service
        <span className={css.span}> by</span> selecting one
        <span className={css.span}> of the</span> options
        <span className={css.span}> below</span>.
      </p>
    </div>
  );
};
export default Description;
