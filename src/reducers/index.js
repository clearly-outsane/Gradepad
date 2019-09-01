import { combineReducers } from "redux";
import Token from "./RefreshToken";
import GoogleAccessToken from "./GoogleAccessToken";
export default combineReducers({
  RefreshToken: Token,
  GoogleAccessToken
});
