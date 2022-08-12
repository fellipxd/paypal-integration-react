import { useState } from 'react';
import Paypal from '../components/PayPal';



function Pay() {
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="App">
      {checkout ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Pay;