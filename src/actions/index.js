export const GetRefreshToken = key => {
  return {
    type: "AUTH_TOKEN",
    payload: key
  };
};

export const GetAccessToken = key => {
  console.log("Here ", key);
  return {
    type: "GOOGLE_ACCESS_TOKEN",
    payload: key
  };
};
