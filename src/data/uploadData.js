import { supabase } from "../lib/supabase";
import itemData from "./DummyData";

const uploadData = async () => {
  try {
    console.log("uploading");

    if (!Array.isArray(itemData) || itemData.length === 0) {
      throw new Error("Invalid or empty data");
    }

    const { data, error } = await supabase.from("items").insert(itemData);

    if (error) {
      throw error;
    }

    console.log("Data inserted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error inserting data:", error.message);
    throw error;
  }
};

export { uploadData };
