import React, { useState, useEffect } from "react";

const ArticleFrame = () => {
  const [articleComponents, setArticleComponents] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState("0402"); // 선택된 번호

  const articleNumbers = ["0402", "0403"];

  useEffect(() => {
    const loadArticles = async () => {
      const components = await Promise.all(
        articleNumbers.map(async (num) => {
          const module = await import(`./2025/Article${num}`);
          return { number: num, component: module.default };
        })
      );
      setArticleComponents(components);
    };
    loadArticles();
  }, []);

  const filteredComponents = articleComponents.filter(
    (item) => item.number === selectedNumber
  );

  return (
    <section>
      <h3>Article 선택</h3>

      {articleNumbers.map((num) => (
        <button key={num} onClick={() => setSelectedNumber(num)}>
          {num}
        </button>
      ))}

      {filteredComponents.map(({ component: Component, number }) => (
        <Component key={number} />
      ))}
    </section>
  );
};

export default ArticleFrame;
