import FrameComponent from "./FrameComponent";
import "./CardTestimoni.css";

const CardTestimoni = () => {
  return (
    <div className="cardtestimoni3">
      <div className="bg-quote3">
        <div className="rectangle-div" />
      </div>
      <div className="frame-parent3">
        <div className="comfortable-and-met-all-my-exp-frame">
          <div className="comfortable-and-met3">
            Comfortable and met all my expectations! I ordered a medium and it
            fit perfectly
          </div>
        </div>
        <div className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, `}</div>
      </div>
      <FrameComponent
        distorter="/ellipse-5-3@2x.png"
        propPadding="0rem 0.406rem 0rem 0.5rem"
        propAlignSelf="stretch"
        propWidth="unset"
        propMinWidth="unset"
        propFlex="1"
        propMinWidth1="unset"
      />
    </div>
  );
};

export default CardTestimoni;
