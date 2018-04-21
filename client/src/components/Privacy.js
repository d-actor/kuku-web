import React, { Component, Fragment } from 'react'
import { Accordion, Icon, Header } from 'semantic-ui-react'

class Privacy extends Component {
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
        <Header as='h1' basic inverted textAlign='center' color='teal'> Terms of Privacy </Header>
        <Accordion styled fluid >
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Privacy Policy
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            KUKU, LLC (“Kuku”, “we”, “us”, “our”) is committed to protecting and respecting your privacy. This policy (together with our Terms and Conditions and any other documents referred to in it) explains how we will process any personal data we collect from you, or that you provide to us. By visiting and using our website, digital app or platform (the “Service”), you are accepting and consenting to this policy and agree to abide by it. If you do not agree to this policy, please do not use the Service. We may, from time to time, make changes to this policy and these will be posted on this page and, where appropriate, e-mailed to you. Please check back frequently to see any updates or changes to this policy.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Information We May Collect
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              We may collect and process the following data about you:
            </p>
            <p>
              Information that you provide when you use the Service. This may include any information you give us by filling in forms on the Service, including when you register to use our Service, download our app, place an order through the Service, post material or request further services or information. The information you give us may include your name, address, e-mail address, phone number, financial information and personal description. All credit card information is entered into the payment system of our payment providers and Kuku does not see or keep these details;
            </p>
            <p>
              Information that third parties provide to us about you. For example, when you connect your account via a social network such as Facebook, we may collect personal information from the social network in accordance with your privacy settings on that social network;
            </p>
            <p>
              If you contact us, we may keep a record of that correspondence and your contact details;
            </p>
            <p>
              Information that you upload to, or choose to share through, our Service including profile information, your interests, likes and dislikes or any other personal information in data that you upload
            </p>
            <p>
              Information that you provide us by completing surveys on our Service or as carried out by our approved third parties; and
            </p>
            <p>
              Technical information which we may automatically collect, including your IP address, operating system, browser type and details of your visits to, and use of, our Service including, but not limited to, the pages and products you view or search for on the Service, page interaction information, traffic data, location data, weblogs and other communication data.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
           Uses Made Of The Information
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              We use information held about you in the following ways:
            </p>
            <p>
              To ensure that content on our Service is presented in the most effective manner for you and for your mobile handset or computer;
            </p>
            <p>
              To provide you or permit selected third parties to provide you with information, products or services that you request from us or which we feel may interest you, where you have consented to be contacted for such purposes;
            </p>
            <p>
              To carry out our obligations arising from any contracts entered into between you and us
            </p>
            <p>
              To allow you to participate in the features of our Service, when you choose to do so;
            </p>
            <p>
              To allow you to carry out transactions with our retail and payment partners through our Service and third party websites
            </p>
            <p>
              To notify you about changes to our Service;
            </p>
            <p>
              To administer and improve our Service; and
            </p>
            <p>
              To measure or understand the effectiveness of advertising we serve you and to deliver relevant advertising to you.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Disclosure Of Your Information
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              We may disclose your personal information to third parties:
            </p>
            <p>
              If we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets;
            </p>
            <p>
              If we or substantially all of our assets are acquired by a third party, in which case personal data held by it about our customers or users will be one of the transferred assets;
            </p>
            <p>
              If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our Terms and Conditions and other agreements; or to protect our rights, property, or safety, our users, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.
            </p>
            <p>
              We do not disclose information about identifiable individuals to our advertisers, retail partners or third parties, but we may provide them with aggregate information about our users (for example, we may inform them that 500 women aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women following the trend “Monochrome”). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Cookies
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              The Service uses cookies to distinguish users from one another and to improve your overall experience. When you use the Service, certain information may be stored locally on your device using ‘cookies’. A cookie is a small text file that is stored on your browser or your device’s local storage. Cookies store limited information about the user of the device, such as the device model, manufacturer, screen resolution, device capabilities, service provider and country and city location data. This helps us to identify how users use our Service so that we can continue to develop and improve it and so that we can provide you with content which is more relevant to your interests. We may also use this information for reporting and analytics purposes.
            </p>
            <p>
              You have the right to choose whether or not to accept or refuse cookies and you can exercise this choice by not accepting our Terms and Conditions and this privacy policy, however, you should note that by doing this, you will not be able to use our Service. By using our Service, you accept the use of cookies in accordance with this privacy policy.
            </p>
            <p>
              Please note that our advertisers may also use cookies, over which we have no control.
            </p>
            <p>
              For more information about what cookies are and how they can be controlled, please visit the third party educational resource www.allaboutcookies.org.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Where We Store Your Personal Data
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              The data that we collect from you is stored on information technology systems located in the EEA which are operated by us. Some data processing in relation to web and email services is carried out on our behalf by a third party which may operate outside the EEA. By submitting your personal data, you agree to this transfer, storing or processing.
            </p>
            <p>
              All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Service, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
            </p>
            <p>
              Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Service; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
            </p>
            <p>
              Certain parts of our Service may include social networking features. Please ensure that when you use these features, you do not submit any personal data that you do not want to be seen, collected or used by other users.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Your Rights
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise the right at any time by contacting us.
            </p>
            <p>
              Our Service may, from time to time, contain links to and from the websites of our retail partners, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Access to Information
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee of $10 to meet our costs in providing you with details of the information we hold about you.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How to Contact Kuku
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              If you have any questions, comments, feedback or complaints regarding this privacy policy or any requests for technical support, then please feel free to contact us.
            </p>
            <p>
              Kuku, LLC
              <br/>
              2254 E. Wilson Ave.
              <br/>
              Salt Lake City, Utah 84108
            </p>
            <p>
              Email: support@kukukart.com
            </p>
          </Accordion.Content>
        </Accordion>
      </Fragment>
    )
  }
}

export default Privacy;
