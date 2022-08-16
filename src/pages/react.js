import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./pages.css";

export default function ReactP() {
  const [show, setShow] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [ErrorMessage, setErrorMessage] = useState("");
  // const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        intent: "CAPTURE",
        purchase_units: [
            {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })

  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log(order);
  };

  const onError = (err) => {
    console.log(err);
  }


  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AULrtHnHV6XBK-Fm3sCmDKJQTntNfWHClVDcaL6_PkRImRl6Nx-lVHoUW0ZyxWA7kREcl-SSZ25sfOaR",
      }}
    >
      <div>
        <div className="wrapper">
          <div className="product-img">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
              alt="SunFlower"
              height="420"
              width="327"
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>Sunflower</h1>
              <h2>POPULAR HOUSE PLANT</h2>
              <p>
                Sunflowers are usually tall annual or perennial plants.
                <br />
                Each "flower" is actually a
                <br />
                disc made up of tiny flowers,
                <br />
                to better attract pollinators.{" "}
              </p>
            </div>

            <div className="product-price-btn">
              <p>
                <span>$20</span>
              </p>
              <button type="submit" onClick={() => setShow(true)}>
                Buy now
              </button>
            </div>
            {show ? (
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            ) : null}
          </div>
        </div>


      </div>
    </PayPalScriptProvider>
  );
}