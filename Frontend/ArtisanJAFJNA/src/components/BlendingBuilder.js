import "./BlendingBuilder.css";

const BlendingBuilder = () => {
  return (
    <div className="blending-builder">
      <img
        className="data-container-icon"
        loading="lazy"
        alt=""
        src="/2@2x.png"
      />
      <img
        className="data-container-icon1"
        loading="lazy"
        alt=""
        src="/3@2x.png"
      />
      <img
        className="data-container-icon2"
        loading="lazy"
        alt=""
        src="/4@2x.png"
      />
      <div className="instagram">
        <div className="instagram-child" />
        <h3 className="follow-our-instagram">Follow our Instagram :</h3>
        <h3 className="artisanshub1">@ArtisansHub</h3>
      </div>
    </div>
  );
};

export default BlendingBuilder;
