import CardBestSeller from "./CardBestSeller";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="frame-container">
      <div className="frame-wrapper">
        <div className="frame-parent1">
          <div className="best-seller-products-parent">
            <h1 className="best-seller-products">Best Seller Products</h1>
            <h3 className="lorem-ipsum-dolor2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros
            </h3>
          </div>
          <div className="cta-wrapper">
            <button className="cta">
              <b className="see-more">See mORE</b>
            </button>
          </div>
        </div>
      </div>
      <div className="cardbest-seller-parent">
        <CardBestSeller image="/image-3@2x.png" />
        <CardBestSeller
          image="/image-4@2x.png"
          propBackgroundImage="unset"
          propBackgroundSize="unset"
          propColor="rgba(194, 10, 10, 0.2)"
        />
        <div className="cardbest-seller1">
          <div className="cardbest-seller-child" />
          <img className="cardbest-seller-item" alt="" src="/group-65.svg" />
          <div className="color-picker">$220</div>
          <b className="color-picker1">$140</b>
          <h3 className="pastel-long-sleeve1">Pastel Long Sleeve</h3>
          <img className="image-icon4" alt="" src="/image-5@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
