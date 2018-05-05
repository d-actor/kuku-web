import React, { Component } from 'react';
import { Image, Segment, Container, Grid, Divider, Responsive, } from 'semantic-ui-react';
import Tshirt from '../images/home/Kuku.main.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import IphoneVideo from '../images/home/iphoneVideo.mp4';
import AndroidVideo from '../images/home/android.mp4';

const AppLinks = styled.div`
  display: flex;
  justify-content: space-around;
  fluid
`

const ButtonLink = styled.a`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
`

class Home extends Component {

  getRandomInt = () => {
      return Math.floor(Math.random() * Math.floor(50));
  }

  render() {
    let int  = this.getRandomInt()
    return (
      <Segment basic style={ styles.mainContainer}>
        <ButtonLink>
          <Link to="/products" style={styles.text}>Shop Traditionally</Link>
          <Link to={`/products/${int}`} style={styles.text}>Go KUKU!</Link>
        </ButtonLink>
        <br/>
        <Image style={styles.image} height="20" fluid centered src={Tshirt} />
        <br/>
        <Container style={styles.middleContainer}>
          <Divider />
          <Grid>
            <Grid.Row centered columns={3}>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <Responsive minWidth={750} >
                  <ReactPlayer style ={styles.video} playing loop width='35%' height="35%" url={IphoneVideo} />
                </Responsive>
                <h2>Like Tinder But Every Match Is A Winner!</h2>
                <p>Everyone is well aware of the simplicity of the Dating app Tinder. Sometimes, when you find your love at first sight, they might not love you back. When you go KUKU, every time you swipe right, so do we. We promise to keep this love train going as long as you do. It is about time there's a little more love in the world.</p>
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <h2>Try a Fun New Way To Shop.</h2>
                <p>KUKU is your one stop shop for all your needs. When you go KUKU, your favorite shopping places all come to you in one spot. Browse through all items one by one to see what comes around (AKA 'GOING KUKU'), or you can shop the traditional way. Then once you find the items you love, all you have to do is show some love and we'll give it right back. Make your life easier by going a little KUKU!</p>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                 <Responsive minWidth={750} >
                  <ReactPlayer style ={styles.androidvideo} playing loop width='35%' height="35%" url={AndroidVideo} />
                </Responsive>
              </Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row centered columns={3}>
            <Grid.Column
              computer={8}
              mobile={16}
              tablet={8}
            >
            </Grid.Column>
          </Grid.Row>
        </Container>
        <Divider />
      </Segment>
    );
  }
}

const styles = {
  text: {
    color: 'white',
  },
  main: {
    color: "#FFF",
  },
  image: {
    alignSelf: "center",
  },
  middleContainer: {
    height:'fill',
    background: 'white',
    width: '100%',
    justifyContent: 'center',
  },
  video:{
    display: 'flex',
    alignContent: 'center',
    margin: 'auto'
  },
    androidvideo:{
    display: 'flex',
    alignContent: 'center',
    margin: 'auto',
    borderRadius: '5px',
    padding: '20px'
  },
  appIcon:{
    width: '160px'
  },
  btns:{
    padding: '10px',
    width: '10vw',
    height: '5vh',
  },
  btnsTOS:{
    padding: '10px',
    width: '15vw',
    height: '5vh',
  },
}

export default Home;
