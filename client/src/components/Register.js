//React
import React, { Component } from 'react';
// Styles 
import { Header, Form, Button, Segment, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import styled from 'styled-components';
import Tshirt2 from '../images/home/tshirt2.jpg';



class Register extends Component {
  state = {name:'', email: '', password: '', passwordConfirmation: '' };
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(name, email, password, passwordConfirmation, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const {name, email, password, passwordConfirmation } = this.state;

    return (
      <div>
        <AppContainerR>
          <Segment basic>
            <Image src={Tshirt2} />
          </Segment>
        </AppContainerR>
        <AppContainer>
          <Segment basic>
            <Header as='h1' textAlign='center'>Register To Go Kuku</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
              <label htmlFor='name'>First Name</label>
              <input
                id='name'
                placeholder='First Name'
                required
                value={name}
                onChange={this.handleChange}
              />
              </Form.Field>
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
              <Form.Field>
                <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                <input
                  id='passwordConfirmation'
                  placeholder='Password Confirmation'
                  type='password'
                  required
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment basic textAlign='center'>
                <Button type='submit'>Submit</Button>
              </Segment>
            </Form>
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

export default connect()(Register);

// tshirts state,and function to display random images if we want to fix bug:

// import Tshirt1 from '../images/home/tshirt.jpg';
// import Tshirt3 from '../images/home/tshirt3.jpg';
// import Tshirt4 from '../images/home/tshirt4.jpg';

// randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]}


// displayImage = () =>{
//   let num = Math.floor(Math.random() * 3);
//   let image = this.state.randomImages[num];
//   return (
//     <Image src={image}/>
//   ) 
// }

