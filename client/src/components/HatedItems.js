import React, { Fragment } from 'react';
import {
  Card,
  Image,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
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
    return (
      <Fragment>
        <Card.Group itemsPerRow={4}>
          { products.map( p =>
            <Card key={p.id}>
              <h2>{p.name}</h2>
               <Image src={p.alt1} />
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

export default connect()(HatedItems)
