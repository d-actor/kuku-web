//React
import React from 'react';
//Redux
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';
//Axios
import axios from 'axios';
//Modal
import Modal from 'react-responsive-modal';
//Semantic-ui, styling
import styled from 'styled-components';
import {
  Card,
  Icon,
  Image,
  Button,
  Header,
  Dimmer,
  Grid,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import {getProducts} from '../actions/products';
import {updateUser} from '../actions/auth';

class ProductView extends React.Component{
  state = { active: false, products: [], open: false }
  handleShow = () => this.setState({ active: !this.state.active })

    componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/products')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ products: res.data })
        dispatch(getProducts(res.products));
    }).then(() => {
      this.setState({loading: false});
    })
  }

  handleLove = (id) => {
    const { dispatch } = this.props;
    axios.put(`/api/products/${id}`)
      .then( res => {
          dispatch(setHeaders(res.headers))
        })
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch( updateUser())
        // dispatch(setHeaders(res.headers))
        this.setState({
          products: this.state.products.filter( p => p.id !== id )
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleHate = (id) => {
    const { dispatch } = this.props;
    axios.put(`/api/hated_items/${id}`)
      .then( res => {
          dispatch(setHeaders(res.headers))
        })
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
      })
      this.setState({
        products: this.state.products.filter( p => p.id !== id )
      })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getRandomInt = () => {
      return Math.floor(Math.random() * Math.floor(54));
  }

  render() {
    let int  = this.getRandomInt()
    const { product={}, user} = this.props;
    const { active, open } = this.state
    return(
      <div>
        <SegmentMain>
          <GridMain>
            <Grid container columns={1}>
            <Grid.Column>
              <Dimmer.Dimmable as={Card} dimmed={active} fluid>
                <Dimmer active={active} onClickOutside={this.handleHide}>
                  <Header as='h1' inverted>
                    {product.title}
                  </Header>
                  <Header as='h2' inverted>
                    {product.variety}
                  </Header>
                  <br />
                  <Header as='h2' inverted>
                    {product.variant_price}
                  </Header>
                  <br />
                  <Header as='h3' inverted>
                     Made By: {product.vendor}
                  </Header>
                  <br />
                  <Header as='h3' color='teal'>
                    {product.body}
                  </Header>
                </Dimmer>
              <Header as='h3'>{product.title} </Header>
                <Card fluid >
                  <Image src={product.image_src} />
                    <Card.Content>
                  <Link to={`/products/${int}`}>
                    <Button
                      icon
                      size='big'
                      animated='fade'
                      floated='left'
                      onClick={() =>
                        user.id === undefined ? this.onOpenModal() : this.handleHate(product.id)
                      }
                    >
                      <Button.Content hidden>
                          <Icon name='thumbs down' color='red' />
                      </Button.Content>
                      <Button.Content visible>
                          Dislike
                      </Button.Content>
                    </Button>
                  </Link>
                    <Link to={`/products/${int}`}>
                      <Button
                        icon
                        size='big'
                        animated='fade'
                        floated='right'
                        onClick={() =>
                          user.id === undefined ? this.onOpenModal() : this.handleLove(product.id)
                        }
                      >
                        <Button.Content visible>
                            Love It!
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name='heart' color='pink' />
                        </Button.Content>
                      </Button>
                    </Link>
                    <Modal open={open} onClose={this.onCloseModal} little textAlign='center'>
                      <h2>You are not logged in!</h2>
                      <p>
                        Unless you have an account with KUKU, we can't remember what products you like! For the best user experience,
                        please register and login.
                      </p>
                      <Link to={'/register'}>
                        <Button basic color='teal'>Register</Button>
                      </Link>
                      <Link to={'/login'}>
                        <Button basic color='teal'>Login</Button>
                      </Link>
                    </Modal>
                  </Card.Content>
                </Card>
              </Dimmer.Dimmable>
              <Button.Group compact>
                <Button onClick={this.handleShow}>
                  { active === false
                    ?
                    "Tell Me More"
                    :
                    "X"
                  }
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </GridMain>
      </SegmentMain>
      <Divider />
    </div>
  )}
}

const GridMain = styled.div`
  width: 58%
  height: 58%
  text-align: center
`
const SegmentMain = styled.div`
  display: flex
  justify-content: center
`
const mapStateToProps = (state, props) => {
  const { products } = state
  return {
    product: products.find( a => a.id === parseInt(props.match.params.id )),
    productIndex: products.findIndex( a => a.id === parseInt(props.match.params.id )),
    products,
    user: state.user
  }
}
export default connect(mapStateToProps)(ProductView)
