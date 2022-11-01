/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";

export const useMail = () => {
	const [loading, setLoading] = useState<boolean>();
	const sendEmailer = async (payload: any) => {
		try {
			console.log(payload);
			setLoading(true);
			const res = await axios({
				method: "POST",
				url: "/api/sendMail",
				data: payload,
			});
			console.log(res);
			cogoToast.success(`${res.data.success}` || "success!");
		} catch (error: any) {
			console.log(error);
			const errorResponse = error.response.errorMessage
				? error.response.errorMessage
				: "Something went wrong";
			cogoToast.error(`${errorResponse}`);
		} finally {
			setLoading(false);
		}
	};
	return {
		loading,
		sendEmailer,
	};
};
