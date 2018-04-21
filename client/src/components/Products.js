//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//axios
import axios from 'axios';
//Modal
import Modal from 'react-responsive-modal';
//Semantic-ui make everything nice
import {
  Button,
  Card,
  Divider,
  Select,
  Icon,
  Image,
  Responsive,
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';
import {getProducts} from '../actions/products';

class Products extends React.Component {
state = {handle: '', products: [], showProduct: true, page:1, totalPages:0, open: false, loading: true }

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

  filterCategory = () => {
    const { products, handle, open } = this.state;
    const {user} = this.props;
    let visible = products;
    if (products.length === 0)
      return (
        <div>
          <h1 style={styles.text} textAlign='center'>All out of products.</h1>
          <p style={styles.text} textAlign='center'>If you want to add more products, you can add them back in by <Link to='/my_hated_products'>clicking here.</Link></p>
        </div>
      ) if (handle)
      visible = products.filter( p => p.handle === handle && p.show_product === true )
      return visible.map( p =>
        <Card style={styles.cardStyle} key={p.id}>
          <h2>{p.name}</h2>
          <Image style={styles.images} src={p.alt1} />
          <Card.Content>
            <Card.Header>
              {p.title}
            </Card.Header>
            <Divider hidden />
            <Card.Header>
              {p.variety}
            </Card.Header>
            <Divider />
            <Card.Header>
              {p.variant_price}
            </Card.Header>
            <Card.Description>
              {p.vendor}
            </Card.Description>
          </Card.Content>
          <Responsive as="Image" minWidth={1000}>
            <Link to= {`/products/${p.id}`}>
              <Button
                fluid
                color='teal'
              >
                View Product Details
              </Button>
            </Link>
          </Responsive>
          <Card.Content>
            <Button
              icon
              size='big'
              animated='fade'
              floated='left'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleHate(p.id)
              }
            >
              <Button.Content hidden>
                <Icon name='thumbs down' color='red' />
              </Button.Content>
              <Button.Content visible>Dislike</Button.Content>
            </Button>
            <Button
              icon
              size='big'
              animated='fade'
              floated='right'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleLove(p.id)
              }
            >
              <Button.Content hidden>
                <Icon name='heart' color='pink' />
              </Button.Content>
              <Button.Content visible>Love It!</Button.Content>
            </Button>
          </Card.Content>
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
        </Card>
      )
  }

  clearCategory = () => {
    this.setState({ handle: '' })
  }

  handleSelect = (e, {value}) => {
    this.setState({ handle: value });
    this.visible
  }

  categoryOptions = () => {
    const { handles } = this.props;
    return handles.map( (h,i) => {
      return { key: i, text: h, value: h }
    })
  }

  handleLove = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/products/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          products: products.filter( p => p.id !== id )
        })
    }).catch( err => {
      console.log(err)
    })
  }

  handleHate = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/hated_items/${id}`)
    axios.put(`/api/show_products/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          products: products.filter( p => p.id !== id )
        })
    }).catch( err => {
      console.log(err)
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  loadingMessage = () => {
    return (
      <Dimmer active style={{height: '100vh'}}>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  render() {
    const {handle, loading} = this.state;
    if (loading) {
      return (
        <Container>
          {this.loadingMessage()}
        </Container>
      )
    } else {
    return (
      <div>
        { handle &&
          <Button
            color= 'black'
            onClick={this.clearCategory}
          >
            Clear Filter: {handle}
          </Button>
        }
        <Divider />
          <Card.Group
            computer={8}
            mobile={2}
            tablet={4}
            centered
            >
            {this.filterCategory()}
          </Card.Group>
      </div>
      )
    }
  }
}

const styles = {
  text: {
    color: "#FFF",
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

}

const mapStateToProps = (state, props) => {
  const { products } = state
  const handles = [...new Set(products.map( h => h.handle))]
  //const vendors = [...new Set(products.map(v => v.vendor))]
  return {
    products,
    handles,
    product: state.products.find(
      (product) => product.id === parseInt(props.match.params.id),
    ),
    user: state.user,
  }
}

export default connect(mapStateToProps)(Products);
