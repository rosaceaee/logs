const Article0402 = () => {
  const DateSet = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const dayOfMonth = today.getDate();

    return <p className="num-date">{month + "월" + dayOfMonth + "일"}</p>;
  };

  return (
    <section className="article-wrap">
      <h5>code block example</h5>

      {/* code block area */}
      <div className="code-wrap">
        <blockquote>
          <code className="code elem-to-wrap">
            &lt;section&gt;
            <br />
            <code className="indent indent-once">
              <span className="red">&lt;div&gt;</span>
              <br />
              <span className="indent-twice pur"> Test();</span>
              <code className="indent indent-third">
                <span className="grn">&lt;div&gt;</span>asdf2
                <span className="grn">&lt;&#47;div&gt;</span>
              </code>
              <span className="indent-once red">&lt;&#47;div&gt;</span>
            </code>
            &lt;&#47;section&gt;
          </code>
        </blockquote>
      </div>
      {/* // */}

      <div className="head title-area">
        <div className="label-wrap">
          <span className="fe">FE</span>
          <span className="be">BE</span>
        </div>

        <DateSet />

        <h3 className="title">
          cheerioと一緒にデータcrawlingを。
          <span className="sub-title">
            為替レートが知りたいけん仕上げよう。
          </span>
        </h3>
      </div>

      <article className="body">
        <div className="article-block maegaiki">
          <p>
            <strong style={{ paddingBottom: "1rem" }}>
              まえがき。
              <br />
            </strong>
            株式はあまり興味なかったんですが、ふと経済的な状況がわかる印・証拠・証になれますので、いったん簡単に作ってみようとして立ち上げたものです。
            <span className="note">
              正直海外のショップから買い物するのが好きで、為替レートの推移に敏感になりがちですけど笑
            </span>
          </p>
        </div>
        <div className="article-block">
          <p>
            さて、データの呼び出しのソースサイトはどこにしようかと考えてみましたが、流石にあのサイトからアメリカドル・日本円の為替レートデータの呼び出しを試してみました。
            <br />
            しかし残念ながら流れはわからないまま向こうからデータの呼び出しをブロックされたみたいです。
            <span className="note">CORSのことはパスしたと思いますが...</span>
          </p>
        </div>
        <div className="article-block">
          <p>
            で、思い浮かんだー他に為替レートをわかるとこがこのワイズっていうところです。海外送金の経験がお持ちの方ならご存じると思います。
          </p>
        </div>
        <hr />
        <div className="article-block">
          <h3>使用したライブラリー</h3>
          <p>
            FE: react, rn <br />
            BE: cheerio, axios, node.js
          </p>
        </div>
        <hr />
        <div className="article-block">
          <h3>バグ解決のながれ</h3>
          <p className="desc-title">
            1. 一応ワンペアの呼び出しは仕上げたけどー
          </p>

          {/* img */}
          <p>
            やば、ひとまずワンペアの呼び出しに集中したせいで、他のペアの呼び出しを考えとくのを忘れちゃった！
          </p>

          <p>
            で、stateのコントロールして多数の為替レートペアの呼び出しができるかも！って思ってみましたが、、
            <br />
            どんなに代表的な国家の通貨ペアがいくつかあってもstateが増えてこのまま作成するとファイルの一番上にstateだらけになっちゃいますよね。
            <br />
            ということで、reducer関数とswitchを合わせてよりメンテしやすい形で作成してみました。
            <br />
            <br />
            思い込んだことは以下になります。
          </p>
          <br />

          <ul>
            <li>
              １．最初の作成で呼び出ししたレートペアに基づいて、これをディフォルトvalueとして初期データで設定　ー　忘れとったuseReducer関数を復習できるいいチャンス！{" "}
              <br />
            </li>
            <li>
              ２．&lt;select&gt;を選択して各レートペアを見せることより一気で代表の国家通貨ペアをわかるかたちで作成すること{" "}
              <br />
              ㄴデータごとにボックス形で仕上げ。 <br />
              ーなんだかUIUXのことでドリルできるチャンスだと思いました。後でデザイナーやプラナーさんとコラボのときお互い話し合いやすくなれると思います。{" "}
              <br />
            </li>
            <li>
              ３．間接的に取り組んだRNの使用・仕組みをわかるようになって、モバイルの開発に対応可能。
            </li>
          </ul>
        </div>
        <br /> <br />
        <p>
          でも、まだ足りないと思ったところもあります。
          <br />
          axiosの使い方と、システムデザインをメンテしやすく、効果的にするのがいまいちな感じ。{" "}
          <br />
          技の特徴はわかってるか、応用するのがまだむずいな感じ。
        </p>
        一番むずかったのは、
        <br />
        <br />
        <br />
        <p>
          so, finally completed to launch it!
          <br />
          appreciate it if you check my work. :D
        </p>
        <a href="">dd</a>
        <div className="others-wrap">
          <p>他にこゆ悩みの解決プロセスも！</p>

          <div>
            <ul>
              <li>1. バタバタ・ブログ立ち上げ</li>
              <li>２. バタバタ・簡単ワードカードの立ち上げの話</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Article0402;
