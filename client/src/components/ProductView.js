// I need to figure out a way to make the card(s) a fixed size
//so the hover effect doesnt change the size of the card, only the visualization. 


import React from 'react';

import { Card, Icon, Image, Button, Segment, Reveal, Header, Container } from 'semantic-ui-react';
import Tshirt from '../images/home/tshirt.jpg'
import styled from 'styled-components';


const productView = () => (
  <SegmentTotal>
{/*Image Card */}
    <Reveal animated='fade'>
      <Reveal.Content visible>
        <ContainerU >
          <Image src = {Tshirt} />
        </ContainerU>
      </Reveal.Content>
{/*Description Card */}
      <Reveal.Content hidden>
        <ContainerL>
          Description
        </ContainerL>
      </Reveal.Content>
    </Reveal>
  </SegmentTotal> 
)


//Styled Components 
const SegmentTotal = styled.div`
  background: white;
  width: 60%;
  height: 60%;
  textAlign: center;
`

const ContainerU = styled.div`
  background: white;
  width: 60%
  height: 60%
`

const ContainerL = styled.div`
  background: white;
  width: 60%
  height: 60%
`


export default productView
