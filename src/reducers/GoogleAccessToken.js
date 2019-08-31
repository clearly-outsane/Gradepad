export default (state = "", action) => {
  if (action.type === "GOOGLE_ACCESS_TOKEN") {
    return action.payload;
  }
  return state;
};
