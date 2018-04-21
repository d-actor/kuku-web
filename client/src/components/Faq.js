import React, { Component, Fragment } from 'react'
import { Accordion, Icon, Header } from 'semantic-ui-react'

class FAQ extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Fragment>
        <Header as='h1' basic inverted textAlign='center' color='teal'> KUKU Frequently Asked Questions</Header>
        <Accordion styled fluid >
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What is Kuku?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Kuku is a collection of web sites you may have never heard of. It is our goal to bring the best fashion, lifestyle and beauty products from around the web ready to purchase from your device.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do I download Kuku?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              If you're reading this, you probably already know the answer, but just in case, the Kuku app is FREE and available for download for your phone from the Apple App Store or Google Play for Android users.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How much does Kuku charge for it's services?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
            Kuku is totally free to use...that's right free-ninety-nine...the big goose egg! We are an affliate site, so our merchants pay us a commision based on sales through our site. All items available on our app are priced as per the retailer's websites and Kuku never charges a premium.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do I find Love?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Like the popular dating app, click 'Love it!' on items you love, and 'Forget it' to say nope.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Where is my shopping cart?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
            All the items you love will appear in the 'My Loved Products' tab on the top right of the page in the navigation bar. From there, you can purchase the item on the affiliate company's website, clear it from your cart, or look at product details again to help you make your final decision.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do I checkout on Kuku?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
            From your 'My Products' cart, click on the item you wish to purchase to see additional pictures and a description of the item. From there simply click on the Buy from Retailer button to be linked to the retailer's web site. All transactions are handled by the retailer.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What about shipping and returns?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              Since all transactions are handled by the retailer, you will be subject to their shipping and return policies. Please take a second to check them out.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do I list my items Kuku?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              If you have an e-commerce site, and would like to list your items on Kuku, please email Pete and he'll take care of you.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Who is this Pete guy?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              He's the guy typing this FAQ section, and I'm honored you've read this far. For the record I am also co-founder of Kuku app and helped write the code with Max and Dan.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do I contact Kuku?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              If you have any questions, comments, feedback or complaints regarding this app or any requests for technical support, then please feel free to contact us.
            </p>
          </Accordion.Content>
        </Accordion>
      </Fragment>
    )
  }
}

export default FAQ;
