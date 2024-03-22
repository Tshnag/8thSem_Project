import { useMemo } from "react";
import "./CardProduct.css";

const CardProduct = ({
  image,
  pastelLongSleeve,
  propPadding,
  propWidth,
  propPadding1,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const stepperStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigatorStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tabbedAreaStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const ratingIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const flexibleGridStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const divStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const symbolSorterStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className="cardproduct">
      <img className="image-icon5" alt="" src={image} />
      <div className="stepper" style={stepperStyle}>
        <div className="navigator" style={navigatorStyle}>
          <div className="tabbed-area" style={tabbedAreaStyle}>
            <img
              className="rating-icon"
              alt=""
              src="/rating.svg"
              style={ratingIconStyle}
            />
          </div>
          <div className="flexible-grid" style={flexibleGridStyle}>
            <b className="pastel-long-sleeve2">{pastelLongSleeve}</b>
            <div className="price-wrapper">
              <div className="price">
                <div className="div" style={divStyle}>
                  $220
                </div>
                <b className="symbol-sorter" style={symbolSorterStyle}>
                  $140
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
