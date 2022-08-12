import React, { useRef, useEffect } from "react";
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const paypal = useRef();
  console.log("Payment here:).)")
  const location =useLocation() 
  console.log("Payment .....")
  console.log( location.state._data)
  console.log( location.state.price)
  console.log( location.state.day)
    useEffect(() => {
      if(window.myButton) window.myButton.close();
      window.myButton = window.paypal
    
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: " Hotel Booking ",
                  amount: {
                    currency_code: "USD",
                    value: location.state.price
                  },
                },
              ], 
              application_context: {
                shipping_preference: "NO_SHIPPING"
            },
          transactions: [{
            "item_list": {
                "items": location.state._data[0].roomNumbers[0].number
            },
           
            "description": "Hotel the best for you"
        }]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("thanh cong ơ day")
            navigate("/success")
          },
          onError: (err) => {
            
            console.log(err);
            navigate("/cancel")
          },
        })
        window.myButton.render(paypal.current);
    }, []);

  return (
    <div>
      <div ref={paypal} ></div>
    </div>
  );
}

