import { useAxios } from "#hooks/useAxios";
import { AuthLoginType, AuthSignupType } from "#types/authTyping";

export const signupService = async (data: AuthSignupType) => {
  const httpClient = await useAxios();

  try {
    const response = await httpClient.post("/api/v1/auth/user/signup/", data);
    return { status: response.status, data: response.data, error: null };
  } catch (error: any) {
    return { status: error.response.status, data: null, error: error.response.data };
  }
};

export const loginService = async (data: AuthLoginType) => {
  const httpClient = await useAxios();

  try {
    const response = await httpClient.post("/api/v1/auth/user/login/", data);
    return { status: response.status, data: response.data, error: null };
  } catch (error: any) {
    return { status: error.response.status, data: null, error: error.response.data };
  }
};
