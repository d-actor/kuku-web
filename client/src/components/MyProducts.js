import React from 'react';
import {
  Card,
  Image,
  Icon,
  Button,
  Container
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setHeaders } from '../actions/headers';

const ItemsList = styled.div`
  height: 100%
`

class MyProducts extends React.Component {
  state = { products: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/my_products')
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ products: res.data })
      });
  }

  handleClick = (id) => {
    const { products } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/show_products/${id}`)
    axios.delete(`/api/my_products/${id}`)
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
        <h1
          style={styles.text}
          textAlign='center'
        >
          "I'm all out of love, I'm so lost without you!"
        </h1>
        <p
          style={styles.text}
          textAlign='center'
        >
          Go ahead and keep on shopping by<Link to='/products'> clicking here.</Link>
        </p>
      </div>
    )
      return (
        <ItemsList>
          <Container>
            <Card.Group
              computer={8}
              mobile={2}
              tablet={4}
              centered
            >
              {products.map( p =>
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
                    <Link to= {`/products/${p.id}`}>
                      <Button
                        fluid
                        color='teal'
                      >
                        View Product Details
                      </Button>
                    </Link>
                    <Button
                      icon
                      size='large'
                      animated='fade'
                      centered
                      floated='left'
                    >
                      <Button.Content visible>
                        <Link
                          to={p.link}
                          target="_blank"
                          rel='noopener noreferrer'
                          style={{ color: '#4d4d4d' }}
                        >
                          Buy Item
                        </Link>
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon name="check" color="green" />
                      </Button.Content>
                    </Button>
                    <Button
                      icon
                      size='large'
                      animated='fade'
                      centered
                      floated='right'
                      onClick={() => this.handleClick(p.id)}
                    >
                      <Button.Content visible>Remove Item</Button.Content>
                      <Button.Content hidden>
                        <Icon name="trash" />
                      </Button.Content>
                    </Button>
                 </Card.Content>
               </Card>
              )
            }
          </Card.Group>
        </Container>
      </ItemsList>
    )
  }
}

const styles = {
  text: {
    color: "#FFF",
  },
  cardStyle: {
    display: 'block',
  },
  images: {
    height: '12vw',
  }
}

export default connect()(MyProducts)
