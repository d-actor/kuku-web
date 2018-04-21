import React from 'react';
//import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import {
  Button,
  Card,
  Container,
  Header,
  Icon,
  Image,
  Responsive,
  Dimmer,
  Loader,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setHeaders} from '../actions/headers';
import {Link} from 'react-router-dom';
import {getProducts} from '../actions/products';

class Womens extends React.Component {

  state = {
    products: [],
    showProduct: true,
    page:1,
    totalPages:0,
    open: false,
    loading: true,
  }

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
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/products/${id}`)
      .then( res => {
      dispatch(setHeaders(res.headers))
    })
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
      .then( res => {
      dispatch(setHeaders(res.headers))
    })
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

  loadingMessage = () => {
    return (
      <Dimmer active style={{height: '100vh'}}>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  filterWomen = (handle) => {
    const { products, open } = this.state;
    const {user}= this.props;

    return products.map( p => {
      if(p.handle === "Womens" && p.show_product === true){
        return(
          <Card style={styles.cardStyle} key={p.id}>
            <h2>{p.name}</h2>
            <Image style={styles.images} src={p.alt1} />
            <Card.Content>
              <Card.Header>
                {p.title}
              </Card.Header>
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
                Unless you have an account with KUKU, we cannot remember what products you like! For the best user experience,
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
    })
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
        <Container>
          {this.loadingMessage()}
        </Container>
      )
    } else {
      return(
        <Container>
          <Dropdown text='Filter By Category' icon='filter' centered style={styles.text} floating labeled button>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/products' style={{color: '#000000'}}>
                  <Menu.Item name='All Products' />
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/mens' style={{color: '#000000'}}>
                  <Menu.Item name='Mens' />
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/baby' style={{color: '#000000'}}>
                  <Menu.Item name='Baby' />
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/accessories' style={{color: '#000000'}}>
                  <Menu.Item name='Accessories' />
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Header
            inverted color = 'teal'
            textAlign='center'
            size='huge'>
              Womens
          </Header>
          <Card.Group
            computer={8}
            mobile={2}
            tablet={4}
            centered>
              {this.filterWomen()}
          </Card.Group>
       </Container>
      )
    }
  }
}

const styles = {
  text: {
    color: "#FFF",
  },
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

export default connect(mapStateToProps)(Womens);
