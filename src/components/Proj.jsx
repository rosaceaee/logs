import React, { useState } from "react";
import "../new.scss";

export const Prj = () => {
  const [tabs, setTabs] = useState(0);

  const worksData = [
    {
      title: "title",
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

  return (
    <>
      <nav className="nav-wrap">
        <ul>
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
      </nav>
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
                  {isActive || isFirst ? (
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
    </>
  );
};
