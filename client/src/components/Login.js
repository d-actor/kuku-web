// React
import React, { Component } from 'react';
// Styles 
import { Header, Form, Button, Segment, Container, Image } from 'semantic-ui-react';
import styled from 'styled-components';
// images
import Tshirt1 from '../images/home/tshirt.jpg';
import Tshirt2 from '../images/home/tshirt2.jpg';
import Tshirt3 from '../images/home/tshirt3.jpg';
import Tshirt4 from '../images/home/tshirt4.jpg';
// redux
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
// client side routing
import { Link } from 'react-router-dom'

class Register extends Component {
  state = {email: '', password: '',randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]};

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch, history } = this.props;
  }

  handleChange = (event) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  displayImage = () =>{
    let num = Math.floor(Math.random() * 3);
    let image = this.state.randomImages[num];
    return (
      <Image src={image}/>
    ) 
  }

  render() {
    const {email, password} = this.state;

    return (
      <div>
      <AppContainerR>
          <Segment basic>
            {this.displayImage()}
          </Segment>
        </AppContainerR>
      <AppContainer>
        <Segment basic>
          <Header as='h1' textAlign='center'>Go Kuku Login</Header>
          <Form>
            <Form.Field>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                placeholder='Email'
                required
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                placeholder='Password'
                type='password'
                required
                value={password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment basic textAlign='center'>
              <Button type='submit' onClick={this.handleSubmit}>Login</Button>
            </Segment>
          </Form>
          <Segment basic textAlign='center'>
            - or -
            < br/>
            login with 
          </Segment>
          <Segment basic textAlign='center'>
          <Button 
            class="huge ui facebook button"
            style={stylesfb.btn}
          >
          <i class="facebook icon"></i>
          Facebook
          </Button>
          <Button 
            class="huge ui twitter button"
            style={stylestw.btn}
          >
          <i class="twitter icon"></i>
          Twitter
          </Button>
          </Segment>
        </Segment>
      </AppContainer>
      </div>
    );
  }
}


//Styled Components 
const AppContainer = styled.div`
  background: white;
  width: 50%;
  float: left;
`
//appcontainerRight
const AppContainerR = styled.div` 
  background: white;
  width: 50%;
  float: right;
`
const stylestw = {
  btn: {
    backgroundColor: '#55acee',
    color: '#fff',
    textAlign: 'center'
    
  },
}

const stylesfb = {
  btn: {
    backgroundColor: '#3b5998',
    color: '#fff',
    textAlign: 'center'
    
  },
}

export default connect()(Register);
