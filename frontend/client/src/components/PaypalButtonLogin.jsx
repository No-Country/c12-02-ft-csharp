import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const PayPalButtonLogin = () => {
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

  const navigate = useNavigate();
  const handlePaypalClick = () => {
    navigate("/login");
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons style={paypalStyles} onClick={handlePaypalClick} />
    </PayPalScriptProvider>
  );
};

export default PayPalButtonLogin;
