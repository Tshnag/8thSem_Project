import "./FunctionSequencer.css";

const FunctionSequencer = () => {
  return (
    <div className="function-sequencer">
      <img className="cart-icon" loading="lazy" alt="" src="/cart.svg" />
      <div className="value-transformer">
        <div className="my-cart-parent">
          <div className="my-cart">MY CART</div>
          <div className="inr-0000">INR 00.00</div>
        </div>
      </div>
    </div>
  );
};

export default FunctionSequencer;
