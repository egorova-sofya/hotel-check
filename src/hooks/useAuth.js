import { getCookie } from "../utils/cookies";

export const useAuth = () => {
  let isAuth = false;
  isAuth = getCookie("isAuthUser");

  return {
    isAuth: !!isAuth,
  };
};
