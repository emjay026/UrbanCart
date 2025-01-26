import { retrieveSetupIntent } from "@stripe/stripe-react-native";
import { supabase } from "../../../lib/supabase";

const fetchPaymentSheetParams = async (amount) => {
  const feedback = await supabase.functions.invoke("payment-sheet", {
    body: { amount },
  });
  return feedback;
};

const initializePaymentSheet = async (amount) => {
  console.log("Initializing PaymentSheet");
  return await fetchPaymentSheetParams(amount);
};

export { initializePaymentSheet };
