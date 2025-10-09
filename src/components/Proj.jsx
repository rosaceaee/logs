import React, { useState, useEffect, useRef } from "react";
import "../new.scss";

const Prj = () => {
  const [tabs, setTabs] = useState(0);
  const [mo, setMo] = useState(false);

  // const [swing, setSwing] = useState({
  //   rotation: 0,
  //   lastScrollY: 0,
  //   // transform: `rotate(${scrollData.rotation}deg)`,
  // });

  const Dataa = [
    {
      title: "운영 프로젝트",
      desc: {
        tachi1: {
          skills: ["js", "scss"],
          description: [
            "LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여",
            "at JSXParserMixin.parseExprSubsc at JSXParserMixin.parseExprSubscat JSXParserMixin.parseExprSubscat JSXParserMixin.parseExprSubscat JSXParserMixin.parseExprSubscat JSXParserMixin.parseExprSubsc zzzzLG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여ㄴ",
          ],
        },
      },
    },
    {
      title: "구축",
      desc: {
        tachi1: {
          skills: ["js", "scss"],
          description: ["ㅋㅋ", "test333"],
        },
        tachi2: {
          skills: ["js", "scss"],
          description: ["ㅋ", "ㅇ"],
        },
      },
    },
    {
      title: "개인 플젝",
      desc: {
        tachi1: {
          skills: ["js", "scss"],
          description: ["./.", "test333"],
        },
        tachi2: {
          skills: ["js", "scss"],
          description: [",.", "."],
        },
      },
    },
  ];

  const worksData = [
    {
      title: "운영 프로젝트",
      desc: [
        ["js", "scss"],
        "LG전자 고객서비스 웹, 모바일 사이트 운영 프로젝트 참여",
        "LG전자 고객서비스의 서비스 예약 관련 페이지의 운영 및 일부 페이지 개발 참여",
        "웹·모바일 서비스 유지보수 및 기능 개선 ",
        "웹 접근성 지침을 준수하여 웹·모바일 페이지 UI 개선 대응 \n 기존 jQuery 기반 JS 코드를 ES6 문법으로 개선하여 기능 구현에 참여",
      ],
    },
    {
      title: "구축 프로젝트",
      desc: [
        ["js", "scss"],
        " 미래에셋생명 ",
        "레거시 CSS/JS 컴포넌트를 구조화 및 최적화하여, 팀 내 협업 효율 및 생산성을 향상시킴.",
        "테스트 과정에서 도출된 UI 이슈를 신속히 반영하며 사용자 경험과 시각적 일관성을 개선함.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
      ],
    },
    {
      title: "현대자동차 N브랜드 사이트 리뉴얼      ",
      desc: [
        ["js", "scss"],
        "디자인 일관성과 재사용성 강화를 위한 UI 컴포넌트 구조 개선 및 문서화 참여",
        "디자인 일관성과 재사용성 강화를 위한 UI 컴포넌트 구조 개선 및 문서화 참여",
        "단위 및 통합 테스트 단계에서 발생한 UI 이슈를 개선하여 품질 안정화에 기여        ",
        "영문 퍼블리싱 중 발견된 원고 품질 이슈에 대해 기획 및 PM 부서와 협업하여 수정 반영함으로써, 최종 콘텐츠의 정확성과 전달력 향상에 기여",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며,\n 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
      ],
    },
    {
      title: "개인 사이드프로젝트",
      desc: [
        ["react", "scss"],
        "simple matome description",
        "레거시 CSS/JS 컴포넌트를 구조화 및 최적화하여, 팀 내 협업 효율 및 생산성을 향상시킴.",
        "테스트 과정에서 도출된 UI 이슈를 신속히 반영하며 사용자 경험과 시각적 일관성을 개선함.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
      ],
    },
  ];

  const Chip = ({ type }) => {
    const labelMap = {
      scss: "test",
      js: "t2est",
      three: "t3est",
    };

    return <span className={`chip ${type}`}>{labelMap[type] || ""}</span>;
  };

  const SwingOnMobile = () => {
    const [scrollData, setScrollData] = useState({
      rotation: 0,
      lastScrollY: 0,
    });

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerWidth <= 500) {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - scrollData.lastScrollY;

          if (delta !== 0) {
            setScrollData((prev) => ({
              rotation: prev.rotation + delta * 0.5,
              lastScrollY: currentScrollY,
            }));
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollData.lastScrollY]);

    // drag evt
    // const Dragg = () => {
    //   const [dragging, setDragging] = useState(false);
    //   const boxRef = useRef(null);

    //   const handleTouchStart = (e) => {
    //     setDragging(true);
    //   };

    //   const handleTouchMove = (e) => {
    //     if (!dragging) return;

    //     const touch = e.touches[0];
    //     const box = boxRef.current;

    //     // box.style.width = `${touch.clientX}%`;
    //     box.style.height = `${touch.clientY - 30}px`;

    //     box.style.position = "fixed";
    //     // box.style.left = `${touch.clientX - 0}px`;
    //     // box.style.top = `${touch.clientY - 0}px`;
    //   };

    //   const handleTouchEnd = () => {
    //     setDragging(false);
    //   };

    //   return (
    //     <div
    //       ref={boxRef}
    //       className="box"
    //       onTouchStart={handleTouchStart}
    //       onTouchMove={handleTouchMove}
    //       onTouchEnd={handleTouchEnd}
    //       style={{
    //         width: "100px",
    //         height: "100px",
    //         backgroundColor: dragging ? "#1591e4" : "#e65952",
    //         borderRadius: "8px",
    //       }}
    //     >
    //       <div
    //         className="box"
    //         onClick={() => {
    //           if (window.innerWidth <= 500) {
    //             setMo((prev) => !prev);
    //           }
    //         }}
    //       ></div>
    //     </div>
    //   );
    // };
    //

    return (
      <>
        <nav
          className="nav-wrap"
          // onClick={() => setMo((prev) => !prev)}
          // style={{ transform: window.innerWidth <= 500 ? `rotate(${scrollData.rotation}deg)` : "none" }}
        >
          <div
            className="box"
            onClick={() => {
              if (window.innerWidth <= 500) {
                setMo((prev) => !prev);
              }
            }}
            draggable="true"
          ></div>

          <ul className="pc-only">
            <li>
              <p>dd</p>
            </li>
            <li>
              <p>asdfawerg</p>
            </li>
          </ul>

          {mo && (
            <div className="mo">
              <ul className="mo-only nav-wrap">
                <li>
                  <p>sth1</p>
                </li>
                <li>
                  <p>sth2</p>
                </li>
                <li>
                  <p>test.test1@gmail.com</p>
                </li>
              </ul>
            </div>
          )}

          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24A148"
              d="M32.1,-53.8C43,-49.4,54.2,-43.6,64.1,-34.4C74.1,-25.2,82.8,-12.6,80.2,-1.5C77.5,9.5,63.5,19,52.3,26.1C41.1,33.1,32.7,37.7,24.5,46.5C16.3,55.2,8.1,68.3,-2.3,72.2C-12.7,76.1,-25.3,70.9,-35.1,63C-44.8,55.1,-51.6,44.4,-54.3,33.5C-57,22.5,-55.5,11.2,-55.7,-0.1C-55.8,-11.4,-57.5,-22.8,-54.9,-33.8C-52.2,-44.8,-45.2,-55.5,-35.3,-60.5C-25.4,-65.5,-12.7,-64.8,-1,-63C10.6,-61.2,21.2,-58.2,32.1,-53.8Z"
              transform="translate(100 100)"
            />
          </svg> 
          
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#08BDBA"
              d="M29.3,-41.8C42.6,-43.1,61,-44.5,68.8,-37.6C76.5,-30.6,73.6,-15.3,67.3,-3.6C61.1,8.1,51.5,16.1,47.8,30.1C44.1,44.2,46.4,64.2,39.4,69.5C32.4,74.8,16.2,65.4,3.8,58.8C-8.6,52.3,-17.3,48.6,-24.6,43.5C-32,38.4,-38,31.9,-50,24.4C-62.1,16.9,-80.1,8.5,-83.4,-1.9C-86.6,-12.2,-75,-24.4,-61.8,-30C-48.7,-35.5,-34,-34.5,-23.4,-34.7C-12.9,-34.9,-6.4,-36.5,0.8,-37.9C8,-39.2,16.1,-40.5,29.3,-41.8Z"
              transform="translate(100 100)"
            />
          </svg>
          */}
        </nav>
      </>
    );
  };

  return (
    <>
      <SwingOnMobile />
      <article>
        <section className="left">
          <span className="title-wrap">
            <h1>どうも</h1>
            <h3>UI디자인에 관심이 많습니다. </h3>
            <p className="para">
              혼자서 일하는 것 보다 서로 도우면서 일하는걸 좋아해요. 만들어보고
              싶은 게 있다면 처음 접하는 기술이 있어도 습득하면서 만들어요.
              마찬가지로 프로젝트에서 사용경험이 없는 언어여도 거부하지 않아요.
              영어, 일본어에 능숙하고 중국어도 조금 할 수 있어요. 디자이너,
              기획자, 개발자와 원활한 협업을 통해 디자인 시스템을 정리하고,
              UI/UX 개선하며 프로젝트를 성공적으로 완수했습니다.
            </p>
            <p className="para">전국 노래자랑</p>
            <p className="para">(간주중)</p>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
          >
            <defs>
              <radialGradient
                id="sssurface-grad-dark"
                r="75%"
                cx="18%"
                cy="20%"
              >
                <stop
                  offset="0%"
                  stop-color="hsl(50, 98%, 50%)"
                  stop-opacity="0"
                ></stop>
                <stop
                  offset="100%"
                  stop-color="#c4a200"
                  stop-opacity="0.64"
                ></stop>
              </radialGradient>
              <radialGradient
                id="sssurface-grad-light"
                r="15%"
                cx="23%"
                cy="20%"
              >
                <stop
                  offset="0%"
                  stop-color="#ffff52"
                  stop-opacity="0.19"
                ></stop>
                <stop
                  offset="100%"
                  stop-color="hsl(50, 98%, 50%)"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
            </defs>
            <g>
              <circle
                r="350"
                cx="400"
                cy="400"
                fill="hsl(50, 98%, 50%)"
              ></circle>
              <circle
                r="350"
                cx="400"
                cy="400"
                fill="url(#sssurface-grad-dark)"
              ></circle>
              <circle
                r="350"
                cx="400"
                cy="400"
                fill="url(#sssurface-grad-light)"
              ></circle>
            </g>
          </svg>
        </section>

        <section className="right">
          <div className="right-header">
            <h2 className="idk">Test description</h2>
          </div>
          <div className="works-wrap">
            {/* {worksData.map((item, index) => {
              const isActive = tabs === index;
              const isFirst = index === 0;

              return (
                <div
                  key={index}
                  className={`works ${isActive ? "on" : ""}`}
                  onClick={() => setTabs(index)}
                >
                  {isActive ? (
                    <span className="title-wrap">
                      <h2 className="title">{item.title}</h2>
                      // {item.date && <p className="date">{item.date}</p>} 
                
                    </span>
                  ) : (
                    <p className="folded-tit">{item.title}</p>
                  )}

                  {isActive && (
                    <div className="cont">
                      <div className="summary">
                        {worksData[0].desc[0].map((type, index) => (
                          <Chip key={index} type={type} />
                        ))}
                      </div>

                      {item.desc.map((d, i) => (
                        <>
                          <p
                            key={i}
                            className={`desc ${i === 1 ? "this" : ""}`}
                          >
                            {d}
                          </p>
                          {i === 2 ? (
                            <>
                              <span className="imgbox">{i}me</span>
                            </>
                          ) : null}
                        </>
                      ))}
                    </div>
                  )}
                </div>
              );
            })} */}

            {Dataa.map((item, index) => {
              const isActive = tabs === index;
              const isFirst = index === 0;

              return (
                <div
                  key={index}
                  className={`works ${isActive ? "on" : ""}`}
                  onClick={() => setTabs(index)}
                >
                  {isActive ? (
                    <span className="title-wrap">
                      <h2 className="title">{item.title}</h2>
                      {item.date && <p className="date">{item.date}</p>}
                    </span>
                  ) : (
                    <p className="folded-tit">{item.title}</p>
                  )}

                  {isActive && (
                    <div className="cont">
                      <div className="summary">
                        {item.desc.tachi1.skills.map((type, index) => (
                          <Chip key={index} type={type} />
                        ))}
                      </div>
                      {item.desc.tachi1.description.map((itm, index) => (
                        <>
                          <p key={index}>{itm}</p>
                        </>
                      ))}

                      {/* {item.desc.map((d, i) => (
                        <>
                          <p
                            key={i}
                            className={`desc ${i === 1 ? "this" : ""}`}
                          >
                            {d}
                          </p>
                          {i === 2 ? (
                            <>
                              <span className="imgbox">{i}me</span>
                            </>
                          ) : null}
                        </>
                      ))} */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
};

export default Prj;
