import React from 'react';
import {
  Card,
  Image,
  Icon,
  Button,
  Container,
  Header,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setHeaders } from '../actions/headers';

const ItemsList = styled.div`
  height: 100%
`

class PurchasedItems extends React.Component {
  state = { products: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/purchased_items')
      .then( res => {
        this.setState({ products: res.data })
        dispatch(setHeaders(res.headers));
      }).catch( err => {
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
        <div>
          <Header as='h1' style={styles.text}>Weve felt the love. Now you get to feel it to.</Header>
          <Header as='h3' style={styles.text}>Go ahead and click buy, then you can choose sizes, colors, whatever you want.</Header>
          <ItemsList>
            <div><Link to='/products' style={styles.text}>See all products</Link></div>
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
                              Buy Item
                         </Button.Content>
                         <Button.Content hidden>
                           <Link
                             to={p.link}
                             target="_blank"
                             rel='noopener noreferrer'
                             style={{ color: '#4d4d4d' }}
                            >
                              <Icon name="check" color="green" />
                            </Link>
                         </Button.Content>
                       </Button>
                   </Card.Content>
                 </Card>
                )
              }
            </Card.Group>
          </Container>
        </ItemsList>
      </div>
    )
  }
}

const styles = {
  text: {
    color: "#FFF",
    textAlign: 'center'
  },
  cardStyle: {
    display: 'block',
  },
  images: {
    height: '12vw',
  }
}

export default connect()(PurchasedItems)
