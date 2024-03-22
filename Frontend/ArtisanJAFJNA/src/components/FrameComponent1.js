import CardProduct from "./CardProduct";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="layout-manager-wrapper">
      <div className="layout-manager">
        <div className="button-maker">
          <div className="form-input">
            <div className="our-products-wrapper">
              <h1 className="our-products">Our Products</h1>
            </div>
            <div className="modal-dialog">
              <div className="tab-container">
                <div className="category">
                  <div className="hot">Hot</div>
                  <div className="on-sale">On SALE</div>
                  <div className="trending-now">Trending Now</div>
                  <div className="new-arrival">New Arrival</div>
                </div>
              </div>
              <div className="collapsible-card" />
            </div>
          </div>
        </div>
        <div className="split-view">
          <CardProduct
            image="/image-6@2x.png"
            pastelLongSleeve="Pastel Long Sleeve"
          />
          <CardProduct
            image="/image-7@2x.png"
            pastelLongSleeve="Pastel Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="10.5rem"
            propPadding1="0rem 1.644rem 0rem 1.625rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-8@2x.png"
            pastelLongSleeve="Hoodiee Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="11.875rem"
            propPadding1="0rem 2.331rem 0rem 2.313rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-9@2x.png"
            pastelLongSleeve="Hoodiee Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="11.875rem"
            propPadding1="0rem 2.325rem 0rem 2.313rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-10@2x.png"
            pastelLongSleeve="Pastel Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="10.5rem"
            propPadding1="0rem 1.638rem 0rem 1.625rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-11@2x.png"
            pastelLongSleeve="Hoodiee Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="11.875rem"
            propPadding1="0rem 2.331rem 0rem 2.313rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-12@2x.png"
            pastelLongSleeve="Casual Long Sleeve"
            propPadding="0rem 1.25rem 0rem 1.313rem"
            propWidth="10.938rem"
            propPadding1="0rem 1.875rem 0rem 1.837rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
          <CardProduct
            image="/image-13@2x.png"
            pastelLongSleeve="Pastel Long Sleeve"
            propPadding="0rem 1.25rem"
            propWidth="10.5rem"
            propPadding1="0rem 1.638rem 0rem 1.625rem"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
