import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PayPalButton = ({ totalValue }) => {
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const paypalOptions = {
    "client-id": "Afslh5Q9gqBFUDlIx_qEzOrr5o_BIUdWGb3_hxZ5vdQf9EbeiXNLeVVGKU-1FRuR67gVNH8fABjqk7JH",
    currency: "USD"
  };

  const paypalStyles = {
    layout: "vertical",
    color: "gold",
    shape: "rect",
    label: "pay"
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalValue
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      console.log("Detalles de la transacción:", details);
      setIsPaymentCompleted(true);
    });
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
        {isPaymentCompleted && <p>Pago completado. Gracias por su compra.</p>}
        {!isPaymentCompleted && (
          <PayPalButtons
            style={paypalStyles}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        )}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
