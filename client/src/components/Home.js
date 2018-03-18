import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import MainLogo from '../images/header-logo.png';

class Home extends Component {
  render() {
    return (
      <Segment style={{ background: "#000" }}>
        <Segment style={{ background: "#FFF" }}>
          <Image style={styles.image} centered src={MainLogo} /> 
        </Segment>
      </Segment>
    );
  }
}

const styles = {
  main: {
    color: "#FFF",
  },
  image: {
    alignSelf: "center",
  }
}

export default Home;
