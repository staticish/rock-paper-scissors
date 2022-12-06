export default function Pentagon({ getId }) {
  return (
    <div className="pentagon">
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
      <div onClick={getId} className="coin lizard" id="lizard">
        <div onClick={getId} className="circle" id="lizard">
          <img
            onClick={getId}
            src={require("../images/icon-lizard.svg").default}
            alt="lizard"
            id="lizard"
          />
        </div>
      </div>
      <div onClick={getId} className="coin spock" id="spock">
        <div onClick={getId} className="circle" id="spock">
          <img
            onClick={getId}
            src={require("../images/icon-spock.svg").default}
            alt="spock"
            id="spock"
          />
        </div>
      </div>
      <img src={require(`../images/bg-pentagon.svg`).default} alt="pentagon" />
    </div>
  );
}
