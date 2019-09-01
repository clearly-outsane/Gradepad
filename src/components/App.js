import React, { Component } from "react";
import firebase from "firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { connect } from "react-redux";
import { GetRefreshToken as GetToken, GetAccessToken } from "../actions";

firebase.initializeApp({
  apiKey: "AIzaSyCFkpceb5y8Q1hceHEXqIAGqenJrxz8450",
  authDomain: "thefirst-5ae95.firebaseapp.com"
});

class App extends Component {
  state = { isSignedIn: false };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      this.props.GetToken(user.refreshToken);
    });

    // this.props.sendRequestForLogin()
  };
  onClickLogin = () => {
    console.log("lol");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        var token = result.credential.accessToken;
        console.log(token);
        this.props.GetAccessToken(token);

        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button
              onClick={() => {
                firebase.auth().signOut();
                this.props.GetToken("");
                this.props.GetAccessToken("");
              }}
            >
              Sign out!
            </button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <GoogleLoginButton onClick={this.onClickLogin} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    RefreshToken: state.RefreshToken
  };
};


export default connect(
  mapStateToProps,
  { GetToken, GetAccessToken }
)(App);
