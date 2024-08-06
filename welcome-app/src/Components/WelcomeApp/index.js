import React, { Component } from "react";
import styles from "./index.module.css";

class WelcomeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribed: false,
    };
  }

  handleSubscribe = () => {
    this.setState((prevState) => ({ isSubscribed: !prevState.isSubscribed }));
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome</h1>
          <p>Thank You! Happy Learning</p>
          {this.state.isSubscribed && (
            <button onClick={this.handleSubscribe}>Subscribed</button>
          )}
          {!this.state.isSubscribed && (
            <button onClick={this.handleSubscribe}>Subscribe</button>
          )}
        </div>
      </div>
    );
  }
}

export default WelcomeApp;
