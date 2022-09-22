import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";

export const useMail = () => {
  const [loading, setLoading] = useState<boolean>();
  const sendEmail = async (payload: any) => {
    try {
      setLoading(true);
      let res = await axios({
        method: "POST",
        url: "/api/sendMail",
        data: payload,
      });
      cogoToast.success(`${res.data.success}`);
    } catch (error: any) {
      console.log(error);
      let errorResponse = !!error.response.errorMessage
        ? error.response.errorMessage
        : "Check your internet connection";
      cogoToast.error(`${errorResponse}`);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    sendEmail,
  };
};
