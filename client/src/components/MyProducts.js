import React from 'react';
import {
  Card,
  Image,
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
    return (
      <ItemsList>
        <Container>
          <Card.Group
            computer={8}
            mobile={2}
            tablet={4}
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
                     centered
                     >
                     <Link to={p.link} target="_blank">Buy it Now!</Link>
                   </Button>
                   <Button
                     icon
                     centered
                     onClick={() => this.handleClick(p.id)}
                    >
                    Remove Item
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
  cardStyle: {
    display: 'block',
    width: '20vw',
    height: '30vw',
  },
  images: {
    height: '15vw',
    alignSelf: 'center'
  }
}

export default connect()(MyProducts)
