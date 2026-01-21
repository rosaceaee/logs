import React, { useState, useEffect } from "react";
import "../new.scss";

export const Prj = () => {
  const [tabs, setTabs] = useState(0);
  const [mo, setMo] = useState(false);

  const Dataa = [
    {
      title: "works",
      desc: {
        works1: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] LG전자 사이트 운영",
          description: [
            "고객지원 서비스 사이트 전반적인 유지보수 및 UXUI 개선 작업 참여",
            "웹/모바일 사이트 최적화 및 성능 개선: 고객지원 전체 페이지의 웹, 모바일 UX/UI 전면 개편 및 웹 접근성 표준 준수 작업 참여",
            "기존 페이지의 js 레거시 코드 개선에 참여하여 사이트 내 안정화 개선",
            "타 신규 작업자의 원활한 온보딩을 위하여 프로젝트 내부 가이드 문서 작성",
          ],
          url: "https://www.lge.co.kr/support",
        },
        works2: {
          tit: "[앱] 미래에셋 헬스케어 앱 구축",
          skills: ["js", "scss"],
          description: [
            "헬스 앱 uxui 리뉴얼 구축 프로젝트의 퍼블리싱 담당",
            "유닛 테스트, 통합 테스트의 ui 관련 부분 디버깅 담당하여 앱 뷰 완성도 향상",
            "2025 어워드 디자인 장려상 수상",
          ],
          url: "https://play.google.com/store/apps/details?id=com.mMiraeAssetLife",
        },
        works3: {
          tit: "[웹 / 모바일] 현대자동차 사이트 구축",
          skills: ["js", "scss"],
          description: [
            "공통 컴포넌트 요소 생성하여 구축 및 유지보수 작업 효율 상승",
            "디자인 일관성과 재사용성 강화를 위한 UI 컴포넌트 구조 개선 및 문서화 참여 ",
            "영문 퍼블리싱 중 발견된 원고 품질 이슈에 대해 기획 및 PM 부서와 협업하여 수정 반영함으로써, 최종 콘텐츠의 정확성과 전달력 향상에 기여",
          ],
          url: "https://www.hyundai-n.com/",
        },
        works4: {
          tit: "[웹 / 모바일] LG전자 global project 사이트 구축",
          skills: ["pug", "scss"],
          description: [
            "동유럽, 대만, 베트남 사이트의 결제, 회원 관련 페이지 구축",
            "타국가 사이트와 싱크 맞추어 안정화 작업",
          ],
          url: "https://www.lg.com/hu/",
        },
        works5: {
          skills: ["js", "scss", "react"],
          tit: "[웹 / 모바일] 영어 교육 웹앱 구축 및 유지보수 ",
          description: [
            "(사내 보안이슈로 url 게시가 어렵습니다.)",
            "react, reactNative로 만들어진 서비스 UXUI 구축 및 유지보수를 담당",
            "영어 교육 웹·앱 서비스의 UI/UX 유지보수 및 QA 테스트 대응을 통해 학습 경험의 일관성과 품질 개선에 기여",
            "기존에 운영하던 웹앱 제품의 리팩토링: 기존에 사용된 CSS 레거시 코드 정리 및 구조 리팩토링을 수행하여 코드 가독성과 UXUI 안정성을 향상시킴",
            "교육에 사용하는 다양한 디바이스에 대응하기 위해 UI 화면 최적화를 진행하여 학습 대상 사용자에게 영어 학습 및 시험응시에 안정적인 UX를 제공함",
          ],
          url: "https://play.google.com/store/apps/details?id=com.culpmobile.creo",
        },
        works6: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] 서울여자대학교 아동학과",
          description: [
            "메인 페이지의 웹, 모바일 화면 안정화 작업을 담당하여 사이트의 안정성 개선",
          ],
          url: "https://childstudy.swu.ac.kr/",
        },
        works7: {
          skills: ["js", "scss"],
          tit: "[웹] 잡코리아 사이트 내 컨텐츠 퍼블리싱",
          description: ["공고 컨텐츠 페이지의 웹, 모바일 화면 퍼블리싱 담당"],
          url: "https://www.jobkorea.co.kr/",
        },
        works8: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] ssmedipia",
          description: ["사이트 내 전체 페이지 퍼블리싱을 담당"],
          url: "http://www.ssmedipia.com/",
        },
        works9: {
          skills: ["js", "scss"],
          tit: "[웹 / 모바일] 공간산업 주식회사",
          description: ["사이트 내 전체 페이지 퍼블리싱을 담당"],
          url: "http://www.spcdoor.com/",
        },
      },
    },
    {
      title: "개인 활동",
      desc: {
        works10: {
          tit: "MDN 영한번역 기여",
          subtit: "흰색박스는 배포 전단계로 리뷰어 컨펌 대기중",
          description: [
            {
              label: "outerHeight",
              url: "https://developer.mozilla.org/ko/docs/Web/API/Window/outerHeight",
            },
            {
              label: "Device Memory API",
              url: "https://developer.mozilla.org/ko/docs/Web/API/Device_Memory_API",
            },
            {
              label: "Clipboard",
              url: "https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API",
            },
            {
              label: "tabIndex",
              url: "https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/tabIndex",
            },
            {
              label: "rate limit",
              url: "https://github.com/mdn/translated-content/pull/31823",
            },
            {
              label: "SSG",
              url: "https://github.com/mdn/translated-content/pull/31895",
            },
          ],
        },
        works11: {
          tit: "Regex learn 사이트 한국어 교정 기여",
          description: [
            {
              label: "이동",
              url: "https://regexlearn.com/ko",
              subDesc:
                "Regex 표현식을 공부하던 도중 발견한 사이트에서 자연스럽지 않은 한국어 번역을 일부 교정하여 한국어 사용자의 원활한 학습에 기여함",
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

    return (
      <>
        <nav
          className="nav-wrap"
          // onClick={() => setMo((prev) => !prev)}
          // style={{ transform: window.innerWidth <= 500 ? `rotate(${scrollData.rotation}deg)` : "none" }}
        >
          <ul>
            <li>
              <a
                href="https://velog.io/@rosaceaee/posts"
                target="_blank"
                rel="noopener noreferrer"
              >
                velog
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rosaceaee"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
          </ul>
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
            <h2 style={{ marginBottom: "1.5rem" }}>
              안녕하세요! <br /> 퍼블리셔 장영주입니다.
            </h2>

            <p className="para">
              화면을 그리며 구현하는 것을 넘어, 프로덕트의 본질적인 내부를
              분석하고 파악하여 품질을 높이는 데에 집중하고 있습니다.
              <br />
              프론트엔드 개발 전반에 관심이 많고 호기심도 많아 CS공부도 하며 타
              직군과 더욱 원활한 커뮤니케이션이 가능합니다.
            </p>
            <p className="para">
              구축, 운영의 다양한 프로젝트에 참여하며 쌓은 경험으로 사용자
              친화적인 UI 구현이 가능하며 다양한 개발환경 기반의 작업에도
              능숙합니다.
            </p>
            <p className="para">
              또한 MDN 웹 문서의 번역 기여 활동을 하며, 다른 개발자들에게도
              도움이 되기를 바람과 동시에 기술적인 지식을 다지고 있습니다.
            </p>
          </span>
        </section>

        <section className="right">
          {/* <div className="right-header">
            <h2 className="idk">Works</h2>
          </div> */}
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
                                <p>{value.subtit}</p>
                              </span>
                            )}

                            {tabs === 0 ? (
                              <>
                                {" "}
                                <div className="chip-box">
                                  <div className="chips">
                                    {value.skills.map((type, index) => (
                                      <Chip key={index} type={type} />
                                    ))}{" "}
                                  </div>
                                </div>
                              </>
                            ) : null}
                          </div>

                          {
                            // last one only
                            tabs === 1 ? (
                              <>
                                <div className="btn-wrap">
                                  {value.description.map((descItem, index) => (
                                    <div
                                      className={`subdesc-box ${
                                        index === 4 || index === 5
                                          ? "notyet"
                                          : ""
                                      }`}
                                    >
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
                                    </div>
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

                                <a
                                  href={value.url}
                                  className="btn-move"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  이동
                                </a>
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
