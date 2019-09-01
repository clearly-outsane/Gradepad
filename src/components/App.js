import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { connect } from "react-redux";
import { GetRefreshToken as GetToken } from "../actions";
import { bindActionCreators } from "redux";

firebase.initializeApp({
  apiKey: "AIzaSyCFkpceb5y8Q1hceHEXqIAGqenJrxz8450",
  authDomain: "thefirst-5ae95.firebaseapp.com"
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      this.props.GetToken(user.refreshToken);
      console.log("user", user);
    });

    // this.props.sendRequestForLogin()
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
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
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
  { GetToken }
)(App);
