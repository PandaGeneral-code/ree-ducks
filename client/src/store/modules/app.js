export const PROFILE_SET = "app/profile/PROFILE_SET";
export const USER_LOGIN = "app/auth/USER_LOGIN";
export const USER_LOGOUT = "app/auth/USER_LOGOUT";

const initialState = { profile: "default", user: null };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PROFILE_SET:
      return { ...state, profile: payload.profile };
    case USER_LOGIN:
      return { ...state, user: payload.userName };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default appReducer;
