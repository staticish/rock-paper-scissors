export default function GamePlay(props) {
  const { usersOption, houseOption, results, playAgain } = props;
  return (
    <section className="container">
      <div className="game">
        <div className={`coin  ${usersOption}  `}>
          <div className="circle">
            {usersOption ? (
              <img
                src={require(`../images/icon-${usersOption}.svg`).default}
                alt="Rock"
              />
            ) : null}
          </div>
          <span className="coin-title"> You Picked </span>
        </div>

        <div
          className={` coin ${houseOption ? houseOption : "unKnown coin1 "} `}
          style={{ left: "60%" }}
        >
          {houseOption ? (
            <div className="circle">
              <img
                src={
                  require(`../images/icon-${
                    houseOption ? houseOption : "rock"
                  }.svg`).default
                }
                alt="House Option"
              />
            </div>
          ) : (
            ""
          )}
          <span className="coin-title2"> The House Picked</span>
        </div>
        {results ? (
          <div className="results">
            {results}
            <button onClick={playAgain}> PLAY AGAIN </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
