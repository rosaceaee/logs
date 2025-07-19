import React from "react";

function Matome({ dataList, stateKey, stateTit, stateComponent, mappingEl }) {
  // stateComponent가 없거나 mappingEl에 해당 컴포넌트가 없으면 기본값 처리
  if (!stateComponent || !mappingEl[stateComponent]) {
    return (
      <div className="matome-container">
        <div className="no-component">
          <p>컴포넌트를 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  // 동적으로 컴포넌트 선택
  const SelectedComponent = mappingEl[stateComponent];

  return (
    <div className="matome-container">
      {/* <header className="matome-header">
        <h1>{stateTit || "제목 없음"}</h1>
        <span className="current-key">현재 선택: {stateKey}</span>
      </header> */}

      <main className="matome-content">
        <SelectedComponent
          key={stateKey}
          currentData={dataList.find((item) => item.key === stateKey)}
          stateKey={stateKey}
          stateTit={stateTit}
        />
      </main>
    </div>
  );
}

export default Matome;
