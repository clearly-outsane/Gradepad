export const GetRefreshToken = key => {
  return {
    type: "AUTH_TOKEN",
    payload: key
  };
};
