export default (state = "", action) => {
  if (action.type === "AUTH_TOKEN") {
    return action.payload;
  }
  return state;
};
