//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
//axios
import axios from 'axios';
//Semantic-ui make everything pretty
import {
  Card,
  Grid,
  Button,
  Icon,
  Container,
  Header,
  Segment,
  Image,
} from 'semantic-ui-react';
import {getProducts} from '../actions/products';
//for testing
import styled from 'styled-components';
import Tshirt1 from '../images/home/tshirt.jpg';
import Tshirt2 from '../images/home/tshirt2.jpg';
import Tshirt3 from '../images/home/tshirt3.jpg';
import Tshirt4 from '../images/home/tshirt4.jpg';



class Products extends React.Component {

state = {page: 1, products: [], randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]}

componentDidMount() {
  const { dispatch } = this.props;
  axios.get('/api/products')
    .then( res => {
      this.setState({ products: res.data })
      dispatch(getProducts(res.products));
    });
}

displayImage = () =>{
  let num = Math.floor(Math.random() * 3);
  let image = this.state.randomImages[num];
  return (
    <Image src={image}/>
  ) 
}



//Render all products on cards
  render() {
    const {products} = this.state;
    return(
      <div>
      <Segment inverted>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'
        inverted color ='white'>
          View All Products        
          </Header>
        </Segment>
        
    <Card.Group itemsPerRow = {4}>
     {products.map(p =>
       <Card 
        key={p.id}>
        <Card.Header> 
          {p.logo} {p.vendor}
          </Card.Header>
          <Card.Header>
          Item name: {p.title} <br/>
          ${p.variant_price}
          </Card.Header>
        <Card.Description>
          {p.image_src}
        </Card.Description>
      <Button>
        <Icon name='love' color='red'/>
        Give me some lovin'
        </Button>
      </Card>
     )}
     {/* the below is for testing purposes 
     to show what it looks like */}
      <Card>
        <Card.Header> 
        <Grid>
          <Grid.Column width={12}>
             Logo, Vendor Name
          </Grid.Column>                
          <Grid.Column width={4}>
            Item name: Test <br/>
              $1000000.00
          </Grid.Column>
         </Grid>
         </Card.Header>
      <Card.Description>
        {this.displayImage()}
        </Card.Description>
        <Button>
        <Icon name='love' color='red'/>
        Give me some lovin'
        </Button>
       </Card>
        
      </Card.Group>
    </div>
    
    )}
}

const mapStateToProps = (state) => {
  return { 
    product: state.product,
    products: state.products
  } 
  //if we want to do multi pages- gem Kaminari 
    //needs to be added to Gemfile.
}
export default connect(mapStateToProps)(Products);