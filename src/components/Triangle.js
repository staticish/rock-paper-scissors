export default function Triangle({ getId }) {
  return (
    <div className="triangle">
      <div onClick={getId} className="coin paper" id="paper">
        <div onClick={getId} className="circle " id="paper">
          <img
            onClick={getId}
            id="paper"
            src={require("../images/icon-paper.svg").default}
            alt="Paper"
          />
        </div>
      </div>
      <div onClick={getId} className="coin scissors" id="scissors">
        <div onClick={getId} className="circle" id="scissors">
          <img
            onClick={getId}
            id="scissors"
            src={require("../images/icon-scissors.svg").default}
            alt="Scissors"
          />
        </div>
      </div>
      <div onClick={getId} className="coin rock" id="rock">
        <div onClick={getId} className="circle" id="rock">
          <img
            onClick={getId}
            src={require("../images/icon-rock.svg").default}
            alt="Rock"
            id="rock"
          />
        </div>
      </div>

      <img src={require(`../images/bg-triangle.svg`).default} alt="triangle" />
    </div>
  );
}
