import { supabase } from "../../../lib/supabase";

const fetchPaymentSheetParams = async (amount) => {
  try {
    console.log("fetching payment sheet params");
    const { data, error } = await supabase.functions.invoke("payment_sheet", {
      body: { amount },
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching payment sheet params:", error.message);
    return null;
  }
};

const initializePaymentSheet = async (amount) => {
  console.log("Initializing PaymentSheet of", amount);
  const data = await fetchPaymentSheetParams(amount);
  console.log("PaymentSheet params:", data);
};
