import React, { useState, useEffect } from "react";
import "../new.scss";

export const Prj = () => {
  const [tabs, setTabs] = useState(0);
  const [mo, setMo] = useState(false);

  // const [swing, setSwing] = useState({
  //   rotation: 0,
  //   lastScrollY: 0,
  //   // transform: `rotate(${scrollData.rotation}deg)`,
  // });

  const Dataa = [
    {
      title: "works",
      desc: {
        tachi1: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] LG전자 사이트 운영",
          description: [
            "고객지원 서비스 사이트 전반적인 유지보수 및 UXUI 개선 작업 참여",
            "웹/모바일 사이트 최적화 및 성능 개선: 전체 페이지(상담 서비스, 출장 서비스 예약 등)의 웹, 모바일 UX/UI 전면 개편 및 웹 접근성 표준 준수",
            "js 레거시 코드 개선과 이벤트 페이지의 js 코드 개선하여 작업자의 작업 효율성 증대",
            "타 신규 작업자의 원활한 온보딩을 위하여 프로젝트 내부 가이드 문서 작성",
          ],
          url: "https://www.lge.co.kr/support",
        },
        tachi2: {
          skills: ["js", "scss", "react"],
          tit: "[웹 / 모바일] UXUIのメンテナンス choi",
          description: [
            "運用と機能の立ち上げ",
            "영어 교육 웹·앱 서비스의 UI/UX 유지보수 및 QA 테스트 대응을 통해 학습 경험의 일관성과 품질 개선에 기여",
            "프로젝트 전반에 사용된 CSS 레거시 코드 정리 및 구조 리팩토링을 수행하여, 코드 가독성과 유지보수성을 향상시킴",
            "교육에 사용하는 다양한 디바이스에 대응하기 위해 UI 화면 최적화를 진행하여 학습 대상 사용자에게 안정적인 UX를 제공함",
          ],
        },
        tachi3: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ・アプリケーション] UXUIのメンテナンス phonic",
          description: [
            "uxui 담당 ",
            "레거시 css를 모두 리팩토링 - 다양한 디바이스 스크린에 대응 및 프로그램 소스 메모리 효율 활성화",
            "웹/앱 전체 uxui 담당",
          ],
        },
        tachi4: {
          skills: ["js", "scss"],
          tit: "[웹] 서울여자대학교 아동학과",
          description: ["", "유지보수 요청으로 페이지 스타일시트 수정"],
        },
        tachi5: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ] ジョップコリアサイト",
          description: [],
        },
        tachi11: {
          tit: "미래에셋 헬스케어 앱",
          skills: ["js", "scss"],
          description: [
            "헬스 앱 uxui 리뉴얼 구축 프로젝트의 uxui 퍼블리싱 담당",
            "유닛 테스트, 통합 테스트의 ui 관련 부분 디버깅 담당하여 앱 뷰 완성도 높임",
            "2025 어워드 디자인 장려상 수상",
          ],
        },
        tachi22: {
          tit: "현대자동차 웹,모바일웹 사이트 ",
          skills: ["js", "scss"],
          description: [
            "공통 컴포넌트 요소 생성하여 구축 및 유지보수 작업 효율 상승",
            "디자인 일관성과 재사용성 강화를 위한 UI 컴포넌트 구조 개선 및 문서화 참여 ",
            "영문 퍼블리싱 중 발견된 원고 품질 이슈에 대해 기획 및 PM 부서와 협업하여 수정 반영함으로써, 최종 콘텐츠의 정확성과 전달력 향상에 기여 動画のようなメディア要素に関するアニメーションイベント関数作成に携わりました。",
          ],
        },
        tachi33: {
          tit: "[웹 / 모바일] LG전자 global project 사이트 ",
          skills: ["pug", "scss"],
          description: [
            "동유럽, 대만, 베트남 사이트의 결제, 회원 관련 페이지 구축",
            "타국가 사이트와 싱크 맞추어 안정화 작업",
            "",
          ],
        },
        tachi44: {
          skills: ["js", "scss", "react"],
          tit: "[웹 / 모바일] uxui 영어시험 구축 및 유지보수",
          description: [
            "(사내 보안이슈로 url 게시가 어렵습니다.)",
            "학원 배포용으로 사용할 영어시험 uxui 페이지 구축",
            "다양한 유형의 시험(4지선다, 동일단어 줄긋기 등) 구현",
          ],
        },
        tachi55: {
          skills: ["js", "scss"],
          tit: "[ウェブ] ssmedipia",
          description: [
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi66: {
          skills: ["js", "scss"],
          tit: "[ウェブ] 공간산업",
          description: [
            "사내 자체 CMS툴로 사이트 제작",
            "",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
      },
    },
    {
      title: "ライティング活動",
      desc: {
        tachi20: {
          tit: "MDN 영한번역 기여",
          description: [
            {
              label: "outerHeight",
              url: "https://developer.mozilla.org/ko/docs/Web/API/Window/outerHeight",
            },
            { label: "deviceApi", url: "https://www.box1.com" },
            { label: "clipboard", url: "https://www.box1.com" },
            { label: "tabindex", url: "https://www.box1.com" },
          ],
        },
        tachi21: {
          tit: "Regex learn 사이트 한국어 교정 기여",
          description: [
            {
              label: "이동",
              url: "https://regexlearn.com/ko",
              subDesc: "ddasdf",
            },
            // "Regex 표현식을 공부하던 도중 발견한 사이트에서 자연스럽지 않은 한국어 번역에 성질이 나서 한국어 사용자의 원활한 학습에 기여함",
          ],
        },
        tachi222: {
          tit: "대시보드 샘플",
          description: [
            {
              label: "이동",
              url: "https://regexlearn.com/ko",
              subDesc: "ddadfdasdf",
            },
          ],
        },
      },
    },
  ];
  const Chip = ({ type }) => {
    const labelMap = {
      scss: "css",
      js: "js",
      react: "react",
      pug: "pug",
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
              <p>velog</p>
            </li>
            <li>
              <p>github</p>
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
            <h1>どうもー</h1>
            <h3></h3>
            <p className="para">
              화면을 그리며 구현하는 것을 넘어, 프로덕트의 본질적인 내부를
              분석하고 파악하여 품질을 높이는 데에 집중하고 있습니다.
              <br />
              프론트엔드 개발 전반에 관심이 많고 호기심도 많아 CS공부도 하며
              더욱 원활한 커뮤니케이션이 가능합니다.
            </p>
            <p className="para">
              퍼블리싱 개발자로서 구축, 운영의 다양한 프로젝트에 참여하며 쌓은
              경험을 바탕으로, 사용자 친화적인 UI 구현과 효율적인 코드 구조
              설계에 능숙합니다.
            </p>
            <p className="para">
              또한 테크니컬 라이팅에 관심이 많아 MDN 웹 문서의 글을 번역하는
              활동도 하고있습니다.
              <a href="" target="_blank" rel="noopener noreferrer">
                번역을 포함한 글 모음 보기
              </a>
            </p>
            <p className="para">(d)</p>
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
            <h2 className="idk">Works</h2>
          </div>
          <div className="works-wrap">
            {Dataa.map((item, index) => {
              const isActive = tabs === index;
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
                      {Object.entries(item.desc).map(([key, value]) => (
                        <div key={key} className="summary">
                          <div className="chip-wrap">
                            {value.tit && (
                              <span className="tit-wrap">
                                <h4 className="title">{value.tit}</h4>
                                <a
                                  href={value.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  이동
                                </a>
                              </span>
                            )}

                            {
                              // last one only
                              tabs === 0 ? (
                                <>
                                  {" "}
                                  <div className="chip-box">
                                    {value.skills.map((type, index) => (
                                      <Chip key={index} type={type} />
                                    ))}{" "}
                                  </div>
                                </>
                              ) : null
                            }
                          </div>

                          {
                            // last one only
                            tabs === 1 ? (
                              <>
                                <div className="btn-wrap">
                                  {value.description.map((descItem, index) => (
                                    <span>
                                      <p>{descItem.subDesc}</p>
                                      <a
                                        key={index}
                                        href={descItem.url}
                                        className="btn-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {descItem.label}
                                      </a>
                                    </span>
                                  ))}{" "}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="works-desc">
                                  {value.description.map((descItem, index) => (
                                    <p key={index} className="txt">
                                      {descItem}
                                    </p>
                                  ))}
                                </div>
                              </>
                            )
                          }
                        </div>
                      ))}
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
