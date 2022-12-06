import React, { useReducer } from "react";
import Pentagon from "./Pentagon";
import Triangle from "./Triangle";
import GamePlay from "./GamePlay";
import RulesButton from "./RulesButton";
import Title from "./Title";

export default function Home() {
  const [points, setPoints] = React.useState(() => {
    const savedPoints = localStorage.getItem("points");
    if (savedPoints == null) return 0;

    try {
      return JSON.parse(savedPoints);
    } catch {
      return 0;
    }
  });
  let bonusLevelParse = JSON.parse(localStorage.getItem("bonusLevel"));
  const initialState = {
    isOver: false,
    results: null,
    userOption: null,
    houseOption: null,
    bonus: localStorage.getItem("bonusLevel") ? !bonusLevelParse : false,
    rulesIcon: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "newGame":
        return {
          ...state,
          isOver: action.value,
          results: action.result
        };
      case "userOption":
        return {
          ...state,
          userOption: action.value
        };
      case "houseOption":
        return { ...state, houseOption: action.value };
      case "bonus":
        return { ...state, bonus: !state.bonus };
      case "rulesIcon":
        return { ...state, rulesIcon: !state.rulesIcon };
      case "reset":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function random() {
    const arr = ["rock", "scissors", "paper", "lizard", "spock"];

    const b = setInterval(
      function () {
        return dispatch({
          type: "houseOption",
          value: state.bonus
            ? arr[Math.floor(Math.random() * 5)]
            : arr[Math.floor(Math.random() * 3)]
        });
      },

      1
    );

    setTimeout(function () {
      clearInterval(b);
    }, 500);
  }
  function bonusLevel() {
    dispatch({ type: "bonus" });
    localStorage.setItem("bonusLevel", state.bonus);
  }
  function getId(event) {
    setTimeout(function () {
      random();
    }, 300);
    setTimeout(function () {
      dispatch({ type: "newGame", value: true });
    }, 1000);

    return dispatch({ type: "userOption", value: event.target.id });
  }

  const resultsOptions = {
    rock: {
      paper: false,
      spock: false,
      scissors: true,
      lizard: true
    },
    paper: {
      rock: true,
      spock: true,
      scissors: false,
      lizard: false
    },
    scissors: {
      paper: true,
      lizard: true,
      rock: false,
      spock: false
    },
    lizard: {
      spock: true,
      paper: true,
      scissors: false,
      rock: false
    },
    spock: {
      scissors: true,
      rock: true,
      paper: false,
      lizard: false
    }
  };

  React.useEffect(() => {
    if (state.isOver) {
      function getOutcome(userOption, houseOption) {
        if (resultsOptions[userOption][houseOption] === true) {
          setPoints((prev) => prev + 1);
          localStorage.setItem("points", points + 1);
          return "YOU WON";
        }
        if (resultsOptions[userOption][houseOption] === false) {
          setPoints((prev) => prev - 1);
          localStorage.setItem("points", points - 1);
          return "YOU LOSE";
        }
        return "DRAW";
      }

      setTimeout(function () {
        return dispatch({
          type: "newGame",
          result: getOutcome(state.userOption, state.houseOption)
        });
      }, 200);
    }
  }, [state.isOver]);

  return (
    <div className="container">
      <Title savedPoints={points} bonusLevel={bonusLevel} bonus={state.bonus} />

      {state.userOption === null ? (
        <>
          {state.bonus ? (
            <Pentagon getId={getId} />
          ) : (
            <Triangle getId={getId} />
          )}
        </>
      ) : (
        <GamePlay
          usersOption={state.userOption}
          houseOption={state.houseOption}
          results={state.results}
          playAgain={() => {
            dispatch({ type: "reset" });
          }}
        />
      )}

      <RulesButton
        toggleRules={() => {
          dispatch({ type: "rulesIcon" });
        }}
        bonus={state.bonus}
        rulesIcon={state.rulesIcon}
      />
    </div>
  );
}
