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
       <MainContainer>
          <FormContainer>
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
          </FormContainer>
          <ImageContainer>
            <Image src={Tshirt2} />
          </ImageContainer>
       </MainContainer>
       <br />
       <br />
      </div>
    );
  }
}

//Styled Components 
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled.div`
  background: white;
  width: 50%;
`
const ImageContainer = styled.div`
  background: white;
  width: 50%;
`

export default connect()(Register);
