import React, { Component } from 'react';
import {Segment, Grid, List, Header, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import appIcon from '../images/home/button-appstore.png';
import googlePlay from '../images/home/AndroidLink.png';


class Footer extends Component{

  getRandomInt = () => {
      return Math.floor(Math.random() * Math.floor(54));
  }

  render(){
    let int  = this.getRandomInt()
    return (
      <Segment inverted vertical>
        <FooterContainer>
          <Grid divided inverted>
            <Grid.Row>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <List link inverted>
                  <List.Item as='a' href="https://github.com/rmiles19" target='_blank' rel='noopener noreferrer'><Icon color="teal"  name="github"/>Rachel Miles</List.Item>
                  <List.Item as='a' href="https://github.com/CQW-Code" target='_blank' rel='noopener noreferrer'><Icon color="teal"  name="github"/>Chris Watkin</List.Item>
                  <List.Item as='a' href="https://github.com/DevinParkinson" target='_blank' rel='noopener noreferrer'><Icon color="teal"  name="github"/>Devin Parkinson</List.Item>
                  <List.Item as='a' href="https://github.com/bcaya" target='_blank' rel='noopener noreferrer'><Icon color="teal"  name="github"/>Bobby Caya</List.Item>
                  <List.Item as='a' href="https://github.com/d-actor" target='_blank' rel='noopener noreferrer'><Icon color="teal"  name="github"/>Dan Actor</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column  mobile={8} tablet={8} computer={6}>
                  <Header as ='h4' inverted textAlign='center'>It's Always Okay to go Kuku. Download the App today!</Header>
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
                </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <Header inverted as='h4' content='' />
                <List link inverted>
                  <List.Item as='a' href={`/products/${int}`}>Go Kuku</List.Item>
                  <List.Item as='a' href="faq">Frequently Asked Questions</List.Item>
                  <List.Item as='a' href="privacypolicy">Privacy</List.Item>
                  <List.Item as='a' href="terms">Terms & Conditions</List.Item>
                  <List.Item as='a' href="settings">Account Settings</List.Item>
                  <List.Item as='a' href="register">Register now!</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </FooterContainer>
      </Segment>
    )
  }
}

// Styled Components
const FooterContainer = styled.div `
  style={{ padding: '2em 0em', position:'absolute', bottom:'0', width:'100%'}}
`

const AppLinks = styled.div`
  display: flex;
  justify-content: space-around;
  fluid
`

export default Footer;
