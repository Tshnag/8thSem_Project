import { useCallback } from "react";
import DataSplitting from "./DataSplitting";
import ProcessCombiner from "./ProcessCombiner";
import FunctionSequencer from "./FunctionSequencer";
import "./LogicTree.css";

const LogicTree = () => {
  const onSignUp1Click = useCallback(() => {
    // Please sync "Become a Seller" to the project
  }, []);

  const htmlFile = `
  https://arid-aware00.vercel.app/
  `

  return (
    <section className="logic-tree1">
      <div className="artisanshub-website">
        <div className="message" />
        <div className="artisanshub-website1" />
        <div className="header">
          <img className="bg-icon1" alt="" src="/bg.svg" />
          <b className="pottery">Pottery</b>
          <div className="output-container">
            <div className="output-container-child" />
            <div className="condition-combiner">
              <div className="free-shipping-online">
                FREE SHIPPING ONLINE PAYMENT ORDER OVER INR 499 IN INDIA
              </div>
            </div>
            <DataSplitting />
          </div>
          <header className="comparator">
            <div className="comparator-child" />
            <div className="accumulator">
              <div className="transformer">
                <div className="transformer-child" />
                <div className="logic-divider">
                  <div className="type-and-hit">TYPE AND HIT ENTER</div>
                </div>
                <div className="value-mapper">
                  <div className="value-mapper-child" />
                  <img
                    className="search-1-icon"
                    alt=""
                    src="/search-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="compressor">
              <div className="function-applier">
                <div className="data-sorter">
                  <img
                    className="pin-1-icon"
                    loading="lazy"
                    alt=""
                    src="/pin-1@2x.png"
                  />
                </div>
                <div className="iteration-manager">
                  <div className="location">LOCATION:</div>
                  <div className="xxyyzz">XXYYZZ</div>
                </div>
              </div>
            </div>
            <div className="parallel">
              <div className="value-selector">
                <img
                  className="artisanshub-logo-png-1"
                  loading="lazy"
                  alt=""
                  src="/artisanshub-logo-png-1@2x.png"
                />
                <div className="output-filter">
                  <h2 className="artisanshub">ArtisansHub</h2>
                </div>
              </div>
            </div>
            <div className="monitor">
              <div className="checker">
                <div className="validator">
                  <ProcessCombiner />
                </div>
                <FunctionSequencer />
              </div>
            </div>
            <div className="stable">
              <div className="resilient">
                <button className="login">
                  <b onClick={() => {
                    window.open(htmlFile, '_blank')
                  }} className="login1">Login</b>s
                </button>
              </div>
              <button className="sign-up">
                <b className="sign-up1">SIGN UP</b>
              </button>
              <button className="sign-up2" onClick={onSignUp1Click}>
                <img className="storefront-icon" alt="" src="/storefront.svg" />
                <div className="function-chain">
                  <b className="become-a-seller">Become A Seller</b>
                </div>
              </button>
            </div>
          </header>
          <div className="value-set">
            <div className="result-processor">
              <div className="result-processor-child" />
              <div className="value-comparator">
                <div className="value-comparator-child" />
                <div className="loop-control">
                  <div className="all-category">ALL CATEGORY</div>
                </div>
                <img
                  className="menu-1-icon"
                  loading="lazy"
                  alt=""
                  src="/menu-1@2x.png"
                />
              </div>
              <div className="path-finder-wrapper">
                <div className="path-finder">
                  <div className="error-handler">
                    <div className="paintings">PAINTINGS</div>
                  </div>
                  <div className="artwork">ARTWORK</div>
                  <div className="error-handler1">
                    <div className="sculptures">SCULPTURES</div>
                  </div>
                  <div className="pottery1">POTTERY</div>
                </div>
              </div>
              <div className="tree-structure">
                <div className="handcrafted-jewellery">
                  HANDCRAFTED JEWELLERY
                </div>
              </div>
              <div className="tree-structure1">
                <div className="other">OTHER</div>
              </div>
            </div>
            <div className="sequence-connector">
              <div className="parallel-connector">
                <div className="flow-controller-wrapper">
                  <div className="flow-controller">
                    <div className="ifs-statement">
                      <div className="else-if-statement">
                        <h1 className="enter-the-world">
                          Enter the World of Handcrafted Elegance
                        </h1>
                        <h3 className="discover-unique-handmade">
                          Discover unique handmade treasures, support talented
                          artisans, and elevate your lifestyle with
                          one-of-a-kind creations.
                        </h3>
                      </div>
                    </div>
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <button className="shop-now-wrapper">
                        <div className="shop-now">SHOP NOW</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hero-image-parent">
                  <img
                    className="hero-image-icon"
                    alt=""
                    src="/heroimage.svg"
                  />
                  <img
                    className="carousel-dots-icon"
                    loading="lazy"
                    alt=""
                    src="/carousel-dots.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="men">Men</div>
            <div className="woman">Woman</div>
            <div className="kids">kids</div>
            <div className="collection">Collection</div>
            <div className="trends">Trends</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicTree;
