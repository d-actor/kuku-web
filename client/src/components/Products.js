//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
//axios
import axios from 'axios';
//Semantic-ui make everything nice
import {
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Button,
  Icon,
  Header,
  Segment,
  Image,
  Menu,
} from 'semantic-ui-react';
import styled from 'styled-components';

import {getProducts} from '../actions/products';
//import ItemCard from './ItemCard';


class Products extends React.Component {

state = {handle: '', page: 1, products: []}

componentDidMount() {
  const { dispatch } = this.props;
  axios.get('/api/products')
    .then( res => {
      this.setState({ products: res.data })
      dispatch(getProducts(res.products));
  }).catch(err => {
      console.log(err)
  })
}

products = () => {
  const { products } = this.state;
    const { handle } = this.state;
    let visible = products;
//added functionality to filter categories
    if (handle)
      visible = products.filter( product => product.handle === handle )
    return visible.map( product =>
  //return this.props.products.map(product =>
    <Card key={product.id}>
      <Image src={product.alt1} />
      <Card.Content>
        <Card.Header>
          {product.title}
        </Card.Header>
        <Card.Header>
          {product.variant_price}
        </Card.Header>
        <Card.Meta>
       </Card.Meta>
        <Image src={product.vendor} />
        <Card.Meta>
          {product.logo}
        </Card.Meta>
      
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  )
}

// Figure out how we can add a Header for CATEGORIES and
//for BRANDS then populate with Brands as well...


clearCategory = () => {
  this.setState({ handle: '' })
}

handleSelect = (e, {value}) => {
  this.setState({ handle: value })
}

categoryOptions = () => {
  const { handles } = this.props;
  return handles.map( (h,i) => {
    return { key: i, text: h, value: h }
  })
}


  render() {
    const {handle} = this.state;
    return (
      <div>
    <Segment
      style={styles.background}>
      <Header
        as='h3'
        size='huge'
        textAlign='center'
         style={style.h3}>
          View All Products
        </Header>
        </Segment>
  
            <Dropdown 
              placeholder='Select Category or Brand' 
              fluid 
              selection
              options={this.categoryOptions()}
              value={handle}
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
                   
         <Card.Group itemsPerRow = {4}>
              {this.products()}
        </Card.Group>
        
      </div>
      
    )
  }
}

const styles = {
  background: {
    backgroundColor: "black",
  }
}
const style = {
  h3: {
    color: "lightblue",
  }
}

const mapStateToProps = (state) => {
  
    const {products}=state
    const handles = [...new Set(products.map( h => h.handle))]
    //const vendors = [...new Set(products.map(v => v.vendor))]    
        return { products, handles}
  }
export default connect(mapStateToProps)(Products);
