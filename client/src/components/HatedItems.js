import React, { Fragment } from 'react';
import {
  Card,
  Image,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';

class HatedItems extends React.Component {
  state = { products: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/my_hated_products')
      .then( res => {
        this.setState({ products: res.data })
        dispatch(setHeaders(res.headers));
      }).catch( err => {
        console.log(err)
      })
  }

  handleClick = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/show_products/${id}`)
    axios.delete(`/api/hated_items/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          products: products.filter( p => p.id !== id )
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { products } = this.state;
    if (products.length === 0)
    return (
      <div>
        <h1 style={{color: '#ffffff'}} textAlign='center'>There's no hating here. Thank you, for being you.</h1>
        <p style={{color: '#ffffff'}} textAlign='center'>Go ahead and keep on shopping by<Link to='/products'> clicking here.</Link></p>
      </div>
    )
    return (
      <Fragment>
        <Card.Group
          computer={8}
          mobile={2}
          tablet={4}
          centered
        >
          { products.map( p =>
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
                <Button.Group>
                 <Button
                   icon
                   labelPosition='right'
                   floated='right'
                   onClick={() => this.handleClick(p.id)}
                  >
                    Return Item to List
                  </Button>
                </Button.Group>
             </Card.Content>
           </Card>
          )
        }
        </Card.Group>
      </Fragment>
    )
  }
}

const styles = {
  cardStyle: {
    display: 'block',
  },
  images: {
    height: '12vw',
  }
}

export default connect()(HatedItems)
