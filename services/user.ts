import { isAxiosError } from "axios";
import api from "./api";
import { LoginRes } from "@/types/user";

export const loginUser = async (data: string) => {
  try {
    const res: LoginRes = await api.post("", data);
    return res;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Network Error: " + error);
  }
};
