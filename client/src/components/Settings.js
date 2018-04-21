import React from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
 } from 'semantic-ui-react';
import styled from 'styled-components';
import Logo from '../images/home/KUKU2 (2).jpg';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import {setHeaders} from '../actions/headers';
import { updateUser } from '../actions/user';
import {getProducts} from '../actions/products';

class Settings extends React.Component { 
  state = { 
      editing: false,
      formValues: { 
      name: '', 
      email: '',
      password: ''},
      handle:'' ,
      products: [],
      showProduct: true,
      open: false,
      // category: false,
  };

  componentDidMount() {
    const { user: { name, email, password }, handle} = this.props
    this.setState({ formValues: { name, email, password },handle })
    const { dispatch } = this.props;
    axios.get('/api/products')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ products: res.data })
        dispatch(getProducts(res.products));
    })
  }

  //Profile view on left side
  profileView = () => {
    const { user } = this.props;
    return (
      <div>
      <Header
        as='h1'
        size='huge'
        textAlign='center'
        color='teal'
        >
          KuKu Settings
        </Header>       
        <Header 
          as= 'h4' 
          icon
          textAlign='center'
          color='teal'
          block
          style= {styles.kukuHeader}
        >
          <Icon 
            size='large'
            name='settings' 
          />
            Account Settings
          <Header.Subheader>
            Manage your settings & preferences
          </Header.Subheader>
        </Header>
        <Header 
          as="h5"
          color='teal'
          size='large'>
          Name: { user.name}          
        </Header>
        <Header 
          as="h5"
          color='teal'
          size='large'
        >
          Email:  {user.email}
       </Header>
     </div>
    )
  }

  //Edit view/functions
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, password }} = this.state;
    const { user, dispatch } = this.state;
    dispatch(updateUser( { name, email, password }))
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
      }
    })
  }

  editView = () => {
    const {formValues:{name, email, password} } = this.state;
    return (
      <Grid centered>
        <Grid.Row>
        <Grid.Column widths= 'equal'>
        <Form 
          onSubmit={this.handleSubmit}
          inverted>
          <Form.Input
            style={styles.form}
            label="Name"
            name="name"
            disabled            
            size='medium'
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            style={styles.form}
            label="Email"
            name="email"
            size='medium'
            value={email}
            type="email"
            onChange={this.handleChange}
          />
          <Form.Input
            style={styles.form}
            label="New Password"
            name="password"
            disabled
            size='medium'
            value={password}
            type="password"
            onChange={this.handleChange}
          />
          <Button
            size='medium'
            disabled
            style = {styles.btns}  
            inverted color='teal'>
              Update
          </Button>
        </Form>
        </Grid.Column>
        </Grid.Row>   
      </Grid>
    )
  }

  //dropdown
  categoryPreference = () => {
    const {handles}  = this.props;
    return handles.map( (h, i) => {
      return { key: i, text: h, value: h }
    })
  }

  handleSelected = (e, {value}) => {
    let selected = value.toLowerCase();
    this.props.history.push(`/${selected}`)
    this.setState({ handle: value });
    this.visible; 
  }

  render() {
    return (
      <div>
      <Container>
        <Segment style={styles.background}>
          <Image src={Logo} 
            className="ui centered image" 
            size="medium" 
            alt="Kuku Logo"
          />
        </Segment>
        <Divider hidden />
        <Grid columns={2}>       
          <Grid.Row>
            <Grid.Column
              width={8}>
                {this.profileView()}
                <br/>
                {this.editView()} 
              </Grid.Column>
              <Grid.Column>
                <Header
                  as='h4'
                  textAlign='left'
                  size='large'
                  color='teal'>
                    I want to shop for:
                </Header> 
                <Dropdown
                  floated='left'  
                  placeholder='Choose a Category'  
                  style={styles.dropdown} 
                  selection 
                  value={this.state.handle}
                  options={this.categoryPreference()}
                  onChange={this.handleSelected} 
                /> 
                <br/>
                <br/>
                <Grid.Row centered>
                  <Header inverted as='h4' content='' />
                  <List inverted style={styles.list} link floated='left' vertical align='middle' size='massive'>
                    <List.Item as='a' href="ProductView">Go Kuku</List.Item>
                    <List.Item as='a' href="faq">FAQs</List.Item>
                    <List.Item as='a' href="privacypolicy">Privacy</List.Item>
                    <List.Item as='a' href="terms">Terms & Conditions</List.Item>
                    <List.Item as='a' href="/">Home</List.Item>
                  </List>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row> 
          </Grid>
        </Container> 
      </div>
    )
  } 
}

const styles = {
  background: {
    backgroundColor: "black",
  },
  scroller: {
    height: '80vh',
    overflow:'auto'
  },
  cardStyle: {
    display: 'block',
  },
  images: {
    height: '12vw',
  },
  dropdown: {
    margin: '20px',
    padding: '20px',
    border: '10px solid #008080',
    height: '2vh',
    width: '25vw',
  }	,
  btns: {
    padding: '20px 40px',
    margin: '20px',
    marginLeft: '50px',
    width: '15vw',
    height: '10vh',
  },  
  kukuHeader: {
    border: '10px solid #008080',
  },
  form: {
    border: '6px solid #008080',
  },
  list:{
    paddingRight: '50px',
    marginLeft: '50px',
    cursor: 'pointer',
    color: 'teal',
    fontSize: '24px',
  }
}
 
const mapStateToProps = (state, props) => {
  const { products } = state
  const handles = [...new Set(products.map( h => h.handle))]
  return {
    products,
    handles,
    product: state.products.find(
      (product) => product.id === parseInt(props.match.params.id),
    ),
    user: state.user,
  }
}
  
export default connect(mapStateToProps)(Settings)
