import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-child" />
      <div className="stats-item" />
      <div className="frame-parent">
        <div className="image-segmenter-wrapper">
          <b className="image-segmenter">2024</b>
        </div>
        <div className="artisanshub-founded">ARTISANSHUB Founded</div>
      </div>
      <div className="stats-inner">
        <div className="frame-inner" />
      </div>
      <div className="branching-logic-parent">
        <div className="branching-logic">
          <b>8900</b>
          <b className="b">+</b>
        </div>
        <div className="product-sold-wrapper">
          <div className="product-sold">Product Sold</div>
        </div>
      </div>
      <div className="frame-div">
        <div className="line-div" />
      </div>
      <div className="branching-logic-group">
        <div className="branching-logic1">
          <b>3105</b>
          <b className="b1">+</b>
        </div>
        <div className="best-reviews-wrapper">
          <div className="best-reviews">Best Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
