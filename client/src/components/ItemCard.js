import React from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';
import axios from 'axios'


const ItemCard = ({ product }) => {
  const product = {id, body, gender, handle, image_src, title, variant_price}
  return(
    <Card key={id}>
      <Image src={image_src} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{body}</Card.Description>
        <Card.Description>{handle}</Card.Description>
        <Card.Description>{gender}</Card.Description>
        <Card.Description>{variant_price}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ItemCard;
