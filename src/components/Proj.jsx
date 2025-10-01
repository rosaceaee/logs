import React, { useState, useEffect, useReducer } from "react";
import "../new.scss";

export const Prj = () => {
  const [tabs, setTabs] = useState(0);
  const [mo, setMo] = useState(false);

  // const [swing, setSwing] = useState({
  //   rotation: 0,
  //   lastScrollY: 0,
  //   // transform: `rotate(${scrollData.rotation}deg)`,
  // });

  const worksData = [
    {
      title: "Title1",
      desc: [
        ["one", "two", "three"],
        "simple matome description",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며,\n 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며",
      ],
    },
    {
      title: "Title2",
      desc: [
        ["one", "two", "three"],
        "simple matome description",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며,\n 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
      ],
    },
    {
      title: "Title3",
      desc: [
        ["one", "two", "three"],
        "simple matome description",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며,\n 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
        "모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The dispatchEvent() method of the EventTarget sends an Event to the object. The dispatchEvent() method of the EventTarget sends an Event to the object",
      ],
    },
    {
      title: "Title4",
      desc: ["desc1", "desc2"],
    },
  ];

  const Chip = ({ type }) => {
    const labelMap = {
      one: "test",
      two: "t2est",
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

    return (
      <>
        <nav
          className="nav-wrap"
          onClick={() => setMo((prev) => !prev)}
          style={{ transform: `rotate(${scrollData.rotation}deg)` }}
        >
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24A148"
              d="M32.1,-53.8C43,-49.4,54.2,-43.6,64.1,-34.4C74.1,-25.2,82.8,-12.6,80.2,-1.5C77.5,9.5,63.5,19,52.3,26.1C41.1,33.1,32.7,37.7,24.5,46.5C16.3,55.2,8.1,68.3,-2.3,72.2C-12.7,76.1,-25.3,70.9,-35.1,63C-44.8,55.1,-51.6,44.4,-54.3,33.5C-57,22.5,-55.5,11.2,-55.7,-0.1C-55.8,-11.4,-57.5,-22.8,-54.9,-33.8C-52.2,-44.8,-45.2,-55.5,-35.3,-60.5C-25.4,-65.5,-12.7,-64.8,-1,-63C10.6,-61.2,21.2,-58.2,32.1,-53.8Z"
              transform="translate(100 100)"
            />
          </svg> */}

          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#08BDBA"
              d="M29.3,-41.8C42.6,-43.1,61,-44.5,68.8,-37.6C76.5,-30.6,73.6,-15.3,67.3,-3.6C61.1,8.1,51.5,16.1,47.8,30.1C44.1,44.2,46.4,64.2,39.4,69.5C32.4,74.8,16.2,65.4,3.8,58.8C-8.6,52.3,-17.3,48.6,-24.6,43.5C-32,38.4,-38,31.9,-50,24.4C-62.1,16.9,-80.1,8.5,-83.4,-1.9C-86.6,-12.2,-75,-24.4,-61.8,-30C-48.7,-35.5,-34,-34.5,-23.4,-34.7C-12.9,-34.9,-6.4,-36.5,0.8,-37.9C8,-39.2,16.1,-40.5,29.3,-41.8Z"
              transform="translate(100 100)"
            />
          </svg>
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
            <h1>title</h1>
            <h3>sub tit</h3>
            <p>
              The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the
              affected event listeners in the appropriate order. The normal event processing rules (including the
              capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().
            </p>
          </span>

          <ul>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </section>

        <section className="right">
          <div className="right-header">
            <h2 className="idk">Test description</h2>
          </div>
          <div className="works-wrap">
            {worksData.map((item, index) => {
              const isActive = tabs === index;
              const isFirst = index === 0;

              return (
                <div key={index} className={`works ${isActive ? "on" : ""}`} onClick={() => setTabs(index)}>
                  {isActive ? (
                    <span className="title-wrap">
                      <h2 className="title">{item.title}</h2>
                      {/* {item.date && <p className="date">{item.date}</p>} */}
                    </span>
                  ) : (
                    <p className="folded-tit">{item.title}</p>
                  )}

                  {isActive && (
                    <div className="cont">
                      <div className="summary">
                        {/* {item.date && <p className="date">{item.date}</p>} */}
                        {worksData[0].desc[0].map((type, index) => (
                          <Chip key={index} type={type} />
                        ))}
                      </div>

                      {item.desc.map((d, i) => (
                        <>
                          <p key={i} className={`desc ${i === 1 ? "this" : ""}`}>
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
            })}

            {/* <div className="works on">
              <span className="title-wrap">
                <h2 className="title">title</h2>
                <p className="date">2025.05.</p>
              </span>
              <div className="cont">
                <p>desc1</p>
                <p>desc2</p>
              </div>
            </div>
            <div className="works">
              <p className="folded-tit">Title2</p>{" "}
              <div className="cont">
                <p>desc1</p>
                <p>desc2</p>
              </div>
            </div>
            <div className="works">
              <p className="folded-tit">Title3</p>{" "}
              <div className="cont">
                <p>desc1</p>
                <p>desc2</p>
              </div>
            </div>
            <div className="works">
              <p className="folded-tit">Title4</p>{" "}
              <div className="cont">
                <p>desc1</p>
                <p>desc2</p>
              </div>
            </div> */}
          </div>
        </section>
      </article>

      {mo && (
        <div className="mo">
          <ul
            className="mo-only"
            style={{
              transition: "transform 0.1s linear",
            }}
          >
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
    </>
  );
};
