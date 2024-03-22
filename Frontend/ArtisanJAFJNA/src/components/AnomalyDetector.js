import "./AnomalyDetector.css";

const AnomalyDetector = () => {
  return (
    <section className="anomaly-detector">
      <div className="value-range-filter">
        <img
          className="value-range-filter-child"
          alt=""
          src="/rectangle-143@2x.png"
        />
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
      <div className="rectangle-group">
        <div className="frame-item" />
        <img className="vector-icon1" alt="" src="/vector-1.svg" />
      </div>
      <div className="predictor">
        <div className="classifier">
          <div className="regressor">
            <div className="clustering-algorithm">
              <div className="association-rule-miner">
                <h1 className="new-collection">New Collection</h1>
              </div>
              <h3 className="discover-our-newest">
                Discover our newest collection: a showcase of artisanal
                excellence. From captivating artworks to stunning jewelry, find
                something truly special in our latest arrivals.
              </h3>
            </div>
          </div>
          <div className="cardnewcollection-parent">
            <div className="cardnewcollection">
              <img
                onMouseOver={(e)=>{
                console.log("Hovered image")
                e.target.style.height = "900px"
                e.target.style.overflow = "hidden"
              }}
                onMouseOut={(e)=>{e.target.style.height = "600px"}}
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <button onClick={()=>{console.log("You clicked")}} className="cardnewcollection-child" />
              <div className="long-sleeve">HANDCRAFTED CUPS</div>
            </div>
            <div className="cardnewcollection1">
              <img className="image-icon1" alt="" src="/image-1@2x.png" />
              <div className="cardnewcollection-item" />
              <div className="long-sleeve1">DREAM CATCHER</div>
            </div>
            <div className="cardnewcollection2">
              <img className="image-icon2" alt="" src="/image-2@2x.png" />
              <div className="cardnewcollection-inner" />
              <div className="long-sleeve2">PAINTINGS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnomalyDetector;
