import React, { useState, useEffect, useReducer } from "react";
import "../card1.scss";

const reducerInit = { selectedWord: null };

const prodReducer = (state, action) => {
  switch (action.type) {
    case "parseData":
      return {
        selectedWord: action.payload,
      };
    // case "findData":
    //   return {
    //     findWord: action.payload,
    //   };
    default:
      return state;
    // throw new Error("prodReducer errrr");
  }
};

const GuessWordCardContainer = () => {
  const wordImgData = "./data/wordImg.json";
  const [state, dispatch] = useReducer(prodReducer, reducerInit);
  const [allData, setAllData] = useState([]);
  const [checkedWords, setCheckedWords] = useState(new Set());

  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const call = await fetch(wordImgData);
        const worddata = await call.json();
        console.log(Object.values(worddata.wordImgData));
        console.log(typeof checkedWords);

        let cuchulData = [];
        Object.values(worddata.wordImgData).forEach((category) => {
          Object.values(category).forEach((items) => {
            cuchulData.push(...items);
          });
        });

        setAllData(cuchulData);

        const randomWord =
          cuchulData[Math.floor(Math.random() * cuchulData.length)];

        dispatch({
          type: "parseData",
          payload: randomWord,
        });
      } catch (err) {
        console.error("data fetch errrrrr: ", err);
      }
    };

    fetchWordData();
  }, []);

  const ResetBtn = () => {
    const randomWord = allData[Math.floor(Math.random() * allData.length)];
    const isChecked = checkedWords.has(randomWord.ko);
    dispatch({
      type: "parseData",
      payload: { ...randomWord, checked: isChecked },
    });

    setCheckedWords((prev) => new Set(prev).add(randomWord.ko));
  };

  // 한번 확인된 부분은 state에 저장.  - 나타나지 않도록.

  return (
    <article>
      <section className="container-word">
        <div>
          {state.selectedWord ? (
            // <div className={`word-card ${checked ? "off" : "on"}`}>
            <div>
              <div className="img-box">
                <figure>
                  <img
                    src={state.selectedWord.img}
                    alt={state.selectedWord.en}
                    style={{ width: "100%" }}
                  />
                </figure>
              </div>
              <div className="desc-box">
                <p className="word eng">en: {state.selectedWord.en}</p>
                <p className="word kor">ko: {state.selectedWord.ko}</p>
              </div>

              <button type="button" onClick={ResetBtn} className="btn-mix">
                <span>섞기</span>
              </button>
            </div>
          ) : (
            <p>ㄱㄷ</p>
          )}
        </div>
      </section>
    </article>
  );
};

export default GuessWordCardContainer;

// function FindWord() {
//    onChange에 넣을 함수 구현
//    input의 text가 .ko 내 데이터와 일치할 경우 -> span에 나타나도록.
//   내 기억에 span에는 {variable === e.blah}를. input에는 onChange={e.value.blah} 이런 형태로 컨디셔널 문구로 넣었을 것 같고.

//   const words = allData;
//   dispatch({
//     type: "findData",
//     payload: { ...words },
//   });

//   return (
//     <>
//       <input type="text" maxLength={10} placeholder="입력" />
//       <span>dd</span>
//     </>
//   );
// }
