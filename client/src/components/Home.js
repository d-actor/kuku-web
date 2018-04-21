import React, { Component } from 'react';
import { Image, Segment, Container, Grid, Divider, Responsive, Button } from 'semantic-ui-react';
import Tshirt from '../images/home/Kuku.main.jpg';
import Iphone from '../images/home/IphoneX.png';
import appIcon from '../images/home/button-appstore.png';
import googlePlay from '../images/home/AndroidLink.png';
import styled from 'styled-components';
import Android from '../images/home/Android.png';
import { Link } from 'react-router-dom';

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
          <Button fluid color='black'>
            <Link to="/products" style={styles.text}>Shop Traditionally</Link>
          </Button>
          <Button fluid color='black'>
            <Link to={`/products/${int}`} style={styles.text}>Go KUKU!</Link>
          </Button>
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
                <Responsive as="Image" minWidth={750}>
                  <Image style={styles.iPhone} centered width="35%" src={Iphone}/>
                </Responsive>
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <h2>Try a Fun New Way To Shop.</h2>
                <p>KUKU is your one stop shop for all your needs. When you go KUKU, your favorite shopping places all come to you in one spot. Browse through all items one by one to see what comes around (AKA 'GOING KUKU'), or you can shop the traditional way. Then once you find the items you love, all you have to do is show some love and we'll give it right back. Make your life easier by going a little KUKU!</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row centered columns={3}>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <h2>Like Tinder But Every Match Is A Winner!</h2>
                <p>Everyone is well aware of the simplicity of the Dating app Tinder. Sometimes, when you find your love at first sight, they might not love you back. When you go KUKU, every time you swipe right, so do we. We promise to keep this love train going as long as you do. It is about time there's a little more love in the world.</p>
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                tablet={8}
              >
                <Responsive as="Image" minWidth={750}>
                  <Image style={styles.Android} centered width="35%" src={Android}/>
                </Responsive>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Divider />
        <Container>
          <AppLinks>
            <Image
              src={appIcon}
              as='a'
              href='https://www.apple.com/ios/app-store/'
              size='small'
              target='_blank'
              rel='noopener noreferrer'
              centered
            />
            <Image
              src={googlePlay}
              as='a'
              href='https://play.google.com/store/apps?hl=en'
              size='small'
              target='_blank'
              rel='noopener noreferrer'
              centered
            />
          </AppLinks>
        </Container>
      </Segment>
    );
  }
}

const styles = {
  text: {
    color: '#ffffff',
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
