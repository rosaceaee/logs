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
      title: "運用",
      desc: {
        tachi1: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] LG전자 사이트 운영",
          description: [
            "고객지원 서비스 사이트 전반적인 유지보수 및 UXUI 개선 작업 참여",
            "웹/모바일 사이트 최적화 및 성능 개선: 전체 페이지(상담 서비스, 출장 서비스 예약 등)의 웹, 모바일 UX/UI 전면 개편 및 웹 접근성 표준 준수",
            "레거시 코드 개선 및 이벤트 페이지 개발용으로 신규 함수 기능 생성하여 타 개발자 작업 효율성 증대",
            "타 신규 작업자의 원활한 온보딩을 위하여 프로젝트 내부 가이드 문서 작성",
          ],
        },
        tachi2: {
          skills: ["js", "scss", "react"],
          tit: "[웹 / 모바일] UXUIのメンテナンス choi",
          description: [
            "運用と機能の立ち上げ",
            "영어 교육용 웹·앱 서비스의 UI/UX 유지보수 및 QA 테스트 대응을 통해 학습 경험의 일관성과 품질 개선에 기여",
            "프로젝트 전반에 사용된 CSS 레거시 코드 정리 및 구조 리팩토링을 수행하여, 코드 가독성과 유지보수성을 향상시킴",
            "다양한 디바이스 및 해상도 기반의 UI 테스트를 통해 화면 최적화를 진행하고, 학습 대상 사용자에게 안정적인 UX를 제공함",
          ],
        },
        tachi4: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ・アプリケーション] UXUIのメンテナンス phonic",
          description: [
            "uxui 담당 ",
            "레거시 css를 모두 리팩토링 - 다양한 디바이스 스크린에 대응 및 프로그램 소스 메모리 효율 활성화",
            "웹/앱 전체 uxui 담당",
          ],
        },
        tachi5: {
          skills: ["js", "scss"],
          tit: "[웹] 서울여자대학교 아동학과",
          description: ["", "유지보수 요청으로 페이지 스타일시트 수정"],
        },
        tachi6: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ] ジョップコリアサイト",
          description: [],
        },
      },
    },
    {
      title: "구축 立ち上げ",
      desc: {
        tachi1: {
          tit: "미래에셋 헬스케어 앱 구축",
          skills: ["js", "scss"],
          description: [
            "헬스 앱 uxui 리뉴얼 구축 프로젝트의 uxui 퍼블리싱 담당",
            "이벤트 페이지 생성",
            "유닛 테스트, 통합 테스트의 ui 관련 부분 디버깅 담당하여 앱 뷰 완성도 높임",
            "무슨 어워드 디자인 상 장려상인가 수상했음",
          ],
        },
        tachi2: {
          tit: "현대자동차 웹,모바일웹 사이트 구축",
          skills: ["js", "scss"],
          description: [
            "현대자동차 웹,모바일 사이트 uxui 구축",
            "공통 컴포넌트 요소 생성하여 구축 및 유지보수 작업 효율 상승",
            "디자인 일관성과 재사용성 강화를 위한 UI 컴포넌트 구조 개선 및 문서화 참여 ",
            "영문 퍼블리싱 중 발견된 원고 품질 이슈에 대해 기획 및 PM 부서와 협업하여 수정 반영함으로써, 최종 콘텐츠의 정확성과 전달력 향상에 기여 動画のようなメディア要素に関するアニメーションイベント関数作成に携わりました。",
          ],
        },
        tachi3: {
          tit: "[웹 / 모바일] LG전자 global project 사이트 구축",
          skills: ["pug", "scss"],
          description: [
            "동유럽, 대만, 베트남 사이트의 결제, 회원 관련 페이지 구축",
            "타국가 사이트와 싱크 맞추어 안정화 작업",
            "",
          ],
        },
        tachi4: {
          skills: ["js", "scss", "react"],
          tit: "[웹 / 모바일] uxui 영어시험 구축 및 유지보수",
          description: [
            "(사내 보안이슈로 url 게시가 어렵습니다.)",
            "학원 배포용으로 사용할 영어시험 uxui 페이지 구축",
            "다양한 유형의 시험(4지선다, 동일단어 줄긋기 등) 구현",
          ],
        },
        tachi5: {
          skills: ["js", "scss"],
          tit: "[ウェブ] ssmedipia",
          description: [
            "사내 자체 CMS툴로 사이트 제작",
            "",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi6: {
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
      title: "サイド",
      desc: {
        tachi0: {
          tit: "MDN 영한번역",
          skills: [],
          description: ["outerHeight", "index", "index", "index", "", ""],
        },
        tachi1: {
          tit: "為替レートのチェック",
          skills: ["js", "scss"],
          description: [
            "個人的に必要なツールが作りたいと思って、簡単な為替レートのツールを作りました。",
            "ある為替レートのとこから呼び出してます。",
            "",
            "",
            "",
            "",
          ],
        },
        tachi2: {
          tit: "test1",
          skills: ["js", "scss"],
          description: ["", ".", "", "", "", ""],
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
            <h1>UI</h1>
            <h3></h3>
            <p className="para">
              시각적인 UI화면 구현과 코드 내부 구조에 관심이 많습니다.
              <br />
              기존에 만들어진 프로덕트를 사용하는 것도 좋아하지만 스스로 직접
              만드는 것을 선호합니다.
              {/* 유사한 메서드의 차이를 비교한다거나. */}
            </p>
            <p className="para">
              기술문서의 글을 한국어로 옮기는 것을 좋아합니다.
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
                      {/* <div className="summary">
                        {item.desc.tachi1.skills.map((type, index) => (
                          <Chip key={index} type={type} />
                        ))}
                      </div> */}

                      {Object.entries(item.desc).map(([key, value]) => (
                        <div key={key} className="summary">
                          <div className="chip-wrap">
                            {value.tit && (
                              <h4 className="title">{value.tit}</h4>
                            )}
                            {value.skills.map((type, index) => (
                              <Chip key={index} type={type} />
                            ))}
                          </div>

                          {value.description.map((descItem, index) => (
                            <p key={index}>{descItem}</p>
                          ))}
                        </div>
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
