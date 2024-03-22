import LogicTree from "../components/LogicTree";
import AnomalyDetector from "../components/AnomalyDetector";
import Stats from "../components/Stats";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import CardTestimoni3 from "../components/CardTestimoni3";
import CardTestimoni2 from "../components/CardTestimoni2";
import CardTestimoni1 from "../components/CardTestimoni1";
import CardTestimoni from "../components/CardTestimoni";
import Footer from "../components/Footer";
import BlendingBuilder from "../components/BlendingBuilder";
import "./LandingPageArtisansHub.css";

const LandingPageArtisansHub = () => {
  return (
    <div className="landing-page-artisanshub">
      <LogicTree />
      <AnomalyDetector />
      <div className="variable-pool">
        <div className="best-product-since-2024-parent">
          <h1 className="best-product-since">Best Product Since 2024</h1>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem
              ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper
              congue eros eleifend ut tincidunt ipsum .
            </div>
          </div>
        </div>
      </div>
      <div className="input-collector">
        <Stats />
      </div>
      <section className="bg-parent">
        <img className="bg-icon" alt="" src="/bg-1.svg" />
        <img
          className="indicator-icon"
          loading="lazy"
          alt=""
          src="/indicator.svg"
        />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <section className="discount-wrapper">
        <img
          className="discount-icon"
          loading="lazy"
          alt=""
          src="/06-discount.svg"
        />
      </section>
      <section className="triangle-tracker">
        <div className="square-sequencer">
          <div className="what-people-say-about-us-wrapper">
            <h1 className="what-people-say">What People Say About Us</h1>
          </div>
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros
          </div>
        </div>
      </section>
      <section className="arcs-architect">
        <div className="path-parser">
          <CardTestimoni3 />
          <CardTestimoni2 />
          <CardTestimoni1 />
          <CardTestimoni />
        </div>
        <div className="locker">
          <img className="indicator-icon1" alt="" src="/indicator-1.svg" />
        </div>
      </section>
      <section className="revealer">
        <div className="link-liaison">
          <Footer />
          <img
            className="path-provoker-icon"
            loading="lazy"
            alt=""
            src="/1@2x.png"
          />
          <img
            className="path-provoker-icon1"
            loading="lazy"
            alt=""
            src="/5@2x.png"
          />
          <BlendingBuilder />
        </div>
      </section>
    </div>
  );
};

export default LandingPageArtisansHub;
