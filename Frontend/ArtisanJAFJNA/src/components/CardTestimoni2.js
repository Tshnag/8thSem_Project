import FrameComponent from "./FrameComponent";
import "./CardTestimoni2.css";

const CardTestimoni2 = () => {
  return (
    <div className="cardtestimoni1">
      <div className="bg-quote1">
        <div className="bg-quote-item" />
      </div>
      <div className="comfortable-and-met-all-my-exp-wrapper">
        <div className="comfortable-and-met1">
          Comfortable and met all my expectations! I ordered a medium and it fit
          perfectly
        </div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co-container">
        <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, `}</div>
      </div>
      <FrameComponent distorter="/ellipse-5-1@2x.png" />
    </div>
  );
};

export default CardTestimoni2;
