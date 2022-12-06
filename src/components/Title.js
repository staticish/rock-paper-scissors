export default function Title({ bonus, savedPoints, bonusLevel }) {
  return (
    <section className="rectangle">
      <img
        src={
          bonus
            ? require("../images/logo-bonus.svg").default
            : require("../images/logo.svg").default
        }
        alt="Rock Paper Scissors"
      />

      <div>
        <h2> SCORE </h2> <span> {savedPoints} </span>
      </div>
      <button className="bonusButton" onClick={bonusLevel}>
        {bonus ? "NORMAL" : "BONUS"}
      </button>
    </section>
  );
}
