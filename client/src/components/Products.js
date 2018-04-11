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
  Dropdown,
  Header,
  Icon,
  Image,
  Segment,
  Visibility,
  Responsive,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';
import {getProducts} from '../actions/products';

class Products extends React.Component {
state = {handle: '', products: [], page:1, totalPages:0 }

state = {handle: '', products: [], showProduct: true, page:1, totalPages:0, open: false }

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/products')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ products: res.data })
        dispatch(getProducts(res.products));
    }).catch(err => {
      console.log(err)
    })
  }

  filterCategory = () => {
    const { products, handle, open } = this.state;
    const {user} = this.props;
    let visible = products;
    if (handle)
      visible = products.filter( p => p.handle === handle && p.show_product === true )
    return visible.map( p =>
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
        <Button.Group>
          <Responsive as="Image" minWidth={1000}>
            <Button
              icon
              labelPosition='left'
              floated='left'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleHate(p.id)
              }
            >
              <Icon name='thumbs down' />
              Forget It.
            </Button>
          </Responsive>
            <Button
              icon
              labelPosition='right'
              floated='right'
              onClick={() =>
                user.id === undefined ? this.onOpenModal() : this.handleLove(p.id)
              }
            >
              <Icon name='heart' color='pink' />
              Love It!
            </Button>
        </Button.Group>
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

  onBottomVisible=()=>{
    const page = this.state.page + 1;
    axios.get(`/api/products?page=${page}&per_page=12`)
      .then( ({data}) => {
        this.setState( state => {
          return {products: [...state.products, ...data], page: state.page+1}})
      }).catch(err => {
        console.log(err)
      })
    }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const {handle} = this.state;
    return (
      <div>
        <Segment style={styles.background}>
          <Header
            as='h3'
            size='huge'
            textAlign='center'
            style={style.h3}
          >
            Go Kuku!
          </Header>
        </Segment>
        <Dropdown
          placeholder='Select Category or Brand'
          fluid
          selection
          value={handle}
          options={this.categoryOptions()}
          onChange={this.handleSelect}
        />
        { handle &&
          <Button
            fluid
            color= 'black'
            onClick={this.clearCategory}
          >
            Clear Filter: {handle}
          </Button>
        }
        <Divider />
        <Visibility
            once = {false}
            continuous={true}
            onBottomVisible={()=>this.onBottomVisible()}
          >
          <Card.Group
            computer={8}
            mobile={2}
            tablet={4}
            centered
            >
            {this.filterCategory()}
          </Card.Group>
        </Visibility>
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
    width: '22vw',
    height: '26vw',
  },
  images: {
    height: '15vw',
    alignSelf: 'center'
  },
}
const style = {
  h3: {
    color: "lightblue",
  }
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
