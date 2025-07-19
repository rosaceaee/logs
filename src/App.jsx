import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import GuessWordCardContainer from "./components/GuessWordCardContainer";
import Matome from "./components/Matome";
import Number from "./components/Number";
import MainEl from "./components/MainEl";
import Test from "./components/Test";
import ArticleFrame from "./article/ArticleFrame";
import Article0402 from "./article/2025/Article0402";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./card1.scss";

const initial = {
  stateKey: null,
  stateTit: "",
  stateComponent: "",
};

const Cont = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "selected_el":
      return {
        stateKey: action.payload.key,
        stateTit: action.payload.title,
        stateComponent: action.payload.component,
      };
    default:
      return state;
  }
};

const mappingEl = {
  Test: Test,
  GuessWordCardContainer: GuessWordCardContainer,
  Number: Number,
  MainEl: MainEl,
  ArticleFrame: ArticleFrame,
};

function App() {
  const [dataList, setDataList] = useState([]);
  const [state, dispatch] = useReducer(reducer, initial);

  const url = "/data/data.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataList(data.list);

        // 초기값 디폴트
        if (state.stateKey === null && data.list.length > 0) {
          dispatch({
            type: "selected_el",
            payload: {
              key: data.list[0].key,
              title: data.list[0].title,
              component: data.list[0].component,
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [state.stateKey]);

  const ToggleNav = () => {
    // setSwitchNav((e) => e.style.toggleClass("on"));
    const [switchNav, setSwitchNav] = useState(false);

    const Back = () => {
      setSwitchNav((hide) => !hide);
    };

    return (
      <>
        <div className={switchNav ? "arrow on" : "arrow"} onClick={Back}>
          <h3>&gt;</h3>
        </div>
        {switchNav && (
          <nav className={switchNav ? "on" : ""}>
            {dataList.map((item) => (
              <button
                key={item.key}
                type="button"
                className="title"
                onClick={() =>
                  dispatch({
                    type: "selected_el",
                    payload: {
                      key: item.key,
                      title: item.title,
                      component: item.component,
                    },
                  })
                }
              >
                {item.key}
              </button>
            ))}
          </nav>
        )}
      </>
    );
  };

  return (
    <Cont.Provider
      value={{
        dataList,
        state,
        dispatch,
      }}
    >
      <div className="App">
        <ToggleNav />
        <Contents mappingEl={mappingEl} />
      </div>
    </Cont.Provider>
  );
}

function Contents() {
  const { dataList, state } = useContext(Cont);
  return (
    <Matome
      dataList={dataList}
      stateKey={state.stateKey}
      stateTit={state.stateTit}
      stateComponent={state.stateComponent}
      mappingEl={mappingEl}
    />
  );
}

export default App;
