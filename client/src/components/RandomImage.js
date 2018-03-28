//React
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Tshirt1 from '../images/home/tshirt.jpg';
import Tshirt2 from '../images/home/tshirt2.jpg';
import Tshirt3 from '../images/home/tshirt3.jpg';
import Tshirt4 from '../images/home/tshirt4.jpg';


class RandomImage extends React.Component{
  state = {randomImages:[Tshirt1, Tshirt2, Tshirt3, Tshirt4]}

  componentDidMount() {
    this.randomizeImage()
  }

    // displayImage = () =>{
    // let num = Math.floor(Math.random() * 3);
    // let image = this.state.randomImages[num]; // not sure if its this.state or this.setState
    // debugger 
    // return (
    //   <Image src={this.image}/>
    // )  
    // }
     randomizeImage = () => {
    let num = Math.floor(Math.random() * 3);
    let image = this.state.randomImages[num];
    console.log(image)

  }
  render() {
    let num = Math.floor(Math.random() * 3);
    let image = this.state.randomImages[num]; // not sure if its this.state or this.setState
  
      
    return (
      <div>
      <Image src={image}/>
      </div>
    ) 
    }
  }

export default RandomImage;