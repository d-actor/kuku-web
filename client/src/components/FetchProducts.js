import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Products from './Products';
import ProductView from './ProductView';
import { getProducts } from '../actions/products';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchProducts extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getProducts(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchProducts);