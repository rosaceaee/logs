import React, { useState, useReducer } from "react";
import "../lms.scss";

const ExampleTable = () => {
  const [chkDeleteModal, setChkDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // sample data
  const data = [];

  const initialState = data;

  function someFunc(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "delete":
        return state.filter((_, asdf) => asdf !== action.asdf);
      case "arrange":
        return action.payload;
      default:
        return state;
    }
  }

  const [cellData, dispatch] = useReducer(someFunc, initialState);
  const [input, setInput] = useState({
    title: "",
    fir: "",
    scnd: "",
  });

  const change = (ee) => {
    const { name, value } = ee.target;
    setInput((asdf) => ({ ...asdf, [name]: value }));
  };

  // 각 행 추가
  const addRow = () => {
    if (input.title && input.fir && input.scnd) {
      dispatch({
        type: "add",
        payload: {
          ...input,
          first: Number(input.fir),
          second: Number(input.scnd),
        },
      });
      setInput({ title: "", fir: "", scnd: "" });
    }
  };

  // 각 행 삭제
  // 데이터가 중복일 경우 맨 아래, 혹은 최근에 등록한 셀에서만 모달 뜨는 현상 수정해야함
  const deleteRow = (el) => {
    setSelectedRow({ ...cellData[el], index: el });
    // index로 데이터 연결을 하지만 특정 상수에서 다른 매개변수명으로 사용하고싶다면 저런식으로.
    setChkDeleteModal((prev) => !prev);
    // dispatch({ type: "delete", el });
  };

  const confirmDelete = () => {
    dispatch({ type: "delete", asdf: selectedRow.index });
    setChkDeleteModal(false);
    setSelectedRow(null);
  };

  const cancel = () => {
    setChkDeleteModal(false);
    setSelectedRow(null);
  };

  // 오름차순 어레인지
  const arrageCells = (e) => {
    const columnIdx = Number(e.target.getAttribute("data-column"));

    const sortKey = columnIdx === 1 ? "fir" : columnIdx === 2 ? "scnd" : null;
    if (!sortKey) return;

    const sorted = [...cellData].sort((a, b) => Number(a[sortKey]) - Number(b[sortKey]));
    dispatch({ type: "arrange", payload: sorted });
  };

  // ts

  return (
    <>
      {/* https://codepen.io/meodai/pen/bNVQLjN */}
      <section className="table-wrap">
        <div style={{}}>
          <div>
            <div className="input-wrap">
              <input type="text" value={input.title} onChange={change} name="title" maxlength="20" placeholder="범례" />
            </div>
            <div className="input-wrap">
              <input type="number" value={input.fir} onChange={change} name="fir" maxlength="10" placeholder="cell1" />
            </div>
            <div className="input-wrap">
              <input
                type="number"
                value={input.scnd}
                onChange={change}
                name="scnd"
                maxlength="10"
                placeholder="cell2"
              />
            </div>
            <button onClick={addRow}>추가</button>
          </div>
        </div>

        <div className="table-con">
          <table id="caltable">
            <thead>
              {/* 0925 투두 : 2열, 3열의 숫자를 사용해서 계산하는 기능 구현합시다. */}
              {/* 0925 투두 : 1열, 2열, 3열의 데이터 입력시 데이터타입 체크하는거 ㄱ */}

              <tr>
                <th class="type1" data-column="0">
                  분류1
                </th>
                <th class="type2" data-column="1" onClick={arrageCells}>
                  분류2
                </th>
                <th class="type2" data-column="2">
                  분류3
                </th>
              </tr>
            </thead>

            {cellData.length > 0 && (
              <tbody>
                {cellData.map((cont, index) => (
                  <tr key={index} onClick={() => deleteRow(index)}>
                    <td>{cont.title}</td>
                    <td>{cont.fir}</td>
                    <td>{cont.scnd}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {chkDeleteModal && selectedRow && (
          <>
            <div class="modal-wrap">
              <h4>
                이거 없앨거야? <br /> 너가 삭제하려는 데이터는 이거야.
              </h4>
              {/* 0925 투두 :  표 형태로 보여주는게 눈에 더 잘 보일까? */}
              <ul className="last-chk">
                <li>제목: {selectedRow.title}</li>
                <li>첫째 행: {selectedRow.fir}</li>
                <li>두번째 행: {selectedRow.scnd}</li>
              </ul>

              <div class="btn-wrap">
                <button type="button yes" onClick={confirmDelete}>
                  ㅇㅇ
                </button>
                <button type="button no" onClick={cancel}>
                  ㄴㄴ
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ExampleTable;

// deleteRow(row) {
//     row.addEventListener("click", function () {
//       if (this.classList.contains("on")) {
//         this.classList.remove("on");
//       } else {
//         document.querySelectorAll("tbody tr.on").forEach((r) => r.classList.remove("on"));
//         this.classList.add("on");
//         showDeleteModal(this);
//       }
//     });
//   }

//   allDelete() {
//     const rows = this.tbody.querySelectorAll("tr");
//     rows.forEach((row) => this.deleteRow(row));
//   }

//   deleteSelectedRow() {
//     const selectedRow = this.tbody.querySelector("tr.on");
//     if (selectedRow) {
//       selectedRow.remove();
//     }
//   }

//   handleInput(value) {
//     if (value.trim()) {
//       this.addRow([value, `${value}`]);
//     }
//   }
// }

// const tableManager = new TableManage("#caltable");

// document.getElementById("number").addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     console.log("enter ddddd");

//     const value = this.value;
//     tableManager.handleInput(value);

//     this.value = "";
//   }
// });

// let initModal = null;

// function confirmDelete() {
//   if (initModal) {
//     initModal.remove();
//     initModal = null;
//   }
//   document.querySelector(".modal-wrap").style.display = "none";
// }

// function showDeleteModal() {
//   const modal = document.querySelector(".modal-wrap");
//   modal.style.display = "flex";
// }
