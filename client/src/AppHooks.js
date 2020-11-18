import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PROFILE_SET, USER_LOGIN, USER_LOGOUT } from "./store/modules/app";

export const useAppHooks = () => {
  const dispatch = useDispatch();
  const { profile, user } = useSelector((state) => state.app);

  return {
    login: useCallback(
      (userName) => {
        dispatch({ payload: { userName }, type: USER_LOGIN });
      },
      [dispatch]
    ),
    logout: useCallback(() => {
      dispatch({ type: USER_LOGOUT });
    }, [dispatch]),
    profile,
    setProfile: useCallback(
      (profile) => dispatch({ payload: { profile }, type: PROFILE_SET }),
      [dispatch]
    ),
    user,
  };
};
