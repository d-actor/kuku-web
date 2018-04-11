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
  render() {
    return (
      <Segment basic style={ styles.mainContainer}>
        <ButtonLink>
          <Button fluid color='teal'>
            <Link to="/products" style={{ color: '#ffffff' }}>Shop Traditionally</Link>
          </Button>
          <Button fluid color='teal'>
            <Link to="/products/32" style={{ color: '#ffffff' }}>Go KUKU!</Link>
          </Button>
        </ButtonLink>
        <br/>
        <Image style={styles.image} height="fill" fluid centered src={Tshirt} />
        <br/>
        <Button compact basic fluid color='teal'>What Is KUKU?</Button>
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
                <p>Why must they do that hack up furballs yet use lap as chair thinking longingly about tuna brine you have cat to be kitten me right meow but hit you unexpectedly but climb a tree. Soft kitty warm kitty little ball of furr purrrrrr find empty spot in cupboard and sleep all day milk the cow for white cat sleeps on a black shirt destroy the blinds and all of a sudden cat goes crazy. </p>
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
                <p>Hodor hodor - hodor... Hodor hodor hodor hodor hodor. Hodor. Hodor hodor - hodor, hodor. Hodor hodor hodor! Hodor, hodor - hodor?! Hodor hodor - hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, HODOR hodor, hodor hodor... Hodor hodor hodor. Hodor, hodor, hodor. Hodor HODOR hodor, hodor HODOR hodor, hodor hodor. Hodor. Hodor. Hodor hodor; hodor hodor? </p>
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
  }

}

export default Home;
