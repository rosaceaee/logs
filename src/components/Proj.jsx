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
          tit: "test1",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi2: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ・アプリケーション] UXUIのメンテナンス choi",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi3: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ・アプリケーション] UXUIのメンテナンス exam",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi4: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ・アプリケーション] UXUIのメンテナンス phonic",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi5: {
          skills: ["js", "scss", "react"],
          tit: "[ウェブ] ジョップコリアサイト",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
        tachi6: {
          skills: ["js", "scss"],
          tit: "[ウェブ] ソウル大学校の児童学科サイト",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
          ],
        },
      },
    },
    {
      title: "立ち上げ",
      desc: {
        tachi1: {
          tit: "test1",
          skills: ["js", "scss"],
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
            "大手の開発システムとプロセスを身に着けられて、個人プロジェクトにコミットするとき残るメッセージに快適化ができるようになりました。なお、主に使うスキルではないレガシー環境で柔軟にコード作成ができるようになりました。",
            "(troubleshooting) 一つのレポジトリーで普段10名のエンジニアがソースの管理に取り組んでいましたので、gitでコンフリクトの状況が頻繁にありましたが、その時にgitについてより詳しくなりましたのでいい経験できました",
            "",
            "",
          ],
        },
        tachi2: {
          tit: "アプリケーションUIUXの立ち上げに取り組み",
          skills: ["js", "scss"],
          description: [
            "アプリケーションUIUXの立ち上げに取り組み",
            "イベントページの関数機能の仕上げ",
            "UIUXに関するQAの前半的な対応",
            "アプリケーションのUXUI画面テストに参与",
            "",
            "",
          ],
        },
        tachi3: {
          tit: "UXUI立ち上げ",
          skills: ["js", "scss"],
          description: [
            "PUGのプロジェクトで、大規模の多言語サイトに取り組みました。オーストラリア、ハンガリー、チェコ、台湾、ベトナムなど",
            "決済・会員ページの立ち上げ及び修正",
            "",
            "",
          ],
        },
        tachi4: {
          tit: "ある自動車会社のレーシングなどに関するサイトのリニューアル立ち上げ",
          skills: ["js", "scss"],
          description: [
            "カスタムコンポーネント要素から作成して、",
            "英語サイトの翻訳言語反映の担当",
            "動画のようなメディア要素に関するアニメーションイベント関数作成に携わりました。",
            "",
            "",
            "",
          ],
        },
        tachi5: {
          skills: ["js", "scss"],
          tit: "[ウェブ] 血液の会社",
          description: [
            "運用と機能の立ち上げ",
            "カスタマーサービスサイトの前半的なユーザーインターフェース開発に取り組みました。",
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
          tit: "MDN docs英韓翻訳",
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
      scss: "scss",
      js: "js",
      three: "react",
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
            <h3>d </h3>
            <p className="para">asdf</p>
            <p className="para">test</p>
            <p className="para">(d)</p>
          </span>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800">
            <defs>
              <radialGradient id="sssurface-grad-dark" r="75%" cx="18%" cy="20%">
                <stop offset="0%" stop-color="hsl(50, 98%, 50%)" stop-opacity="0"></stop>
                <stop offset="100%" stop-color="#c4a200" stop-opacity="0.64"></stop>
              </radialGradient>
              <radialGradient id="sssurface-grad-light" r="15%" cx="23%" cy="20%">
                <stop offset="0%" stop-color="#ffff52" stop-opacity="0.19"></stop>
                <stop offset="100%" stop-color="hsl(50, 98%, 50%)" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
            <g>
              <circle r="350" cx="400" cy="400" fill="hsl(50, 98%, 50%)"></circle>
              <circle r="350" cx="400" cy="400" fill="url(#sssurface-grad-dark)"></circle>
              <circle r="350" cx="400" cy="400" fill="url(#sssurface-grad-light)"></circle>
            </g>
          </svg>
        </section>

        <section className="right">
          <div className="right-header">
            <h2 className="idk">Test description</h2>
          </div>
          <div className="works-wrap">
            {Dataa.map((item, index) => {
              const isActive = tabs === index;

              return (
                <div key={index} className={`works ${isActive ? "on" : ""}`} onClick={() => setTabs(index)}>
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
                            {value.tit && <h4 className="title">{value.tit}</h4>}
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
