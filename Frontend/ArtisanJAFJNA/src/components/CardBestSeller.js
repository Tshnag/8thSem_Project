import { useMemo } from "react";
import "./CardBestSeller.css";

const CardBestSeller = ({
  image,
  propBackgroundImage,
  propBackgroundSize,
  propColor,
}) => {
  const cardBestSellerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
    };
  }, [propBackgroundImage, propBackgroundSize]);

  const statisticCalculatorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="cardbest-seller" style={cardBestSellerStyle}>
      <textarea className="data-merger" rows={12} cols={24} />
      <img className="image-icon3" alt="" src={image} />
      <div className="cardbest-seller-inner">
        <div className="frame-group">
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-65.svg"
          />
          <div className="pastel-long-sleeve-parent">
            <h3 className="pastel-long-sleeve">Pastel Long Sleeve</h3>
            <div className="data-normalizer">
              <div
                className="statistic-calculator"
                style={statisticCalculatorStyle}
              >
                $220
              </div>
              <b className="b2">$140</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBestSeller;
