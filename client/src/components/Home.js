import React, { Component } from 'react';
import { Header, Container, Image, Grid, Card, Button, Input, Icon } from 'semantic-ui-react';
import TextLoop from "react-text-loop"
import Carousel from 'nuka-carousel';


class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{backgroundImage: 'linear-gradient(to bottom right, #0692cd, #00cffc)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
          <div style={{height: '750px', width: '100%'}}>
            <Image centered src="http://resortsunlimited.com/wp-content/themes/resortsunlimited/images/logo.png"/>
          <br/>
            <Header as='h2' textAlign='center' style={{color: 'white', fontFamily: 'Arial, Helvetica, "Liberation Sans", FreeSans, sans-serif'}}>Time for you to get the best deals possible on your next vacation</Header>
            <Header as='h2' textAlign='center' style={{color: 'white', marginTop: '5vh' , fontFamily: 'cerapro-bold,sans-serif'}}>Receive the best deals on trips to
              <TextLoop interval={1500} springConfig={{ stiffness: 180, damping: 8 }}>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> San Francisco</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Paris</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Cabo San Lucas</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Rio De Janeiro</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> London</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Anchorage</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Boston</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Greece</Header>
                <Header as='h2' textAlign='center' style={{color: 'white', marginLeft: '6px', textDecoration: 'underline', fontFamily: 'cerapro-bold,sans-serif'}}> Rome</Header>
              </TextLoop>
            </Header>
            <br/>
            <Input action={{ color: 'green', labelPosition: 'left', icon: 'signup', content: 'Sign Up' }}
              actionPosition='left'
              placeholder='Enter Email'
              style={{marginLeft: '50px'}}
              />
          </div>
        </Container>
        <Container fluid style={{backgroundImage: 'url(http://www.amenaviajes.com/wp-content/uploads/2016/11/AmenaRiodeJaneiro.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', fontFamily: 'cerapro-bold,sans-serif'}}>
          <div style={{height: '800px', width: '100%'}}>
            <br/><br/>
            <Header as="h1" textAlign="center" style={{fontFamily: 'cerapro-bold,sans-serif'}}>How Does it work?</Header>
            <Grid container doubling columns='equal'>
              <Grid.Row>
                <Grid.Column style={{backgroundColor: '#dfdedf', height: '400px', marginTop: '15px', overflow: 'auto'}}>
                  <Image centered src="https://www.shareicon.net/data/256x256/2016/01/03/697382_arrows_512x512.png" style={{height: '40px', marginTop: '15px'}}/>
                  <Header textAlign="center" style={{fontFamily: 'cerapro-bold,sans-serif'}}>Sign Up</Header>
                  <p>Organized design traveling website modern cute theme organized cute. Blogger webdesign website blogger Travel webdesign webdesign colorful.</p>
                </Grid.Column>
                <Grid.Column style={{backgroundColor: '#dfdedf', height: '400px', marginLeft: '50px', marginTop: '15px', overflow: 'auto'}}>
                  <Image centered src="https://image.flaticon.com/icons/png/128/1040/1040218.png" style={{height: '40px', marginTop:'10px'}}/>
                  <Header textAlign="center" style={{fontFamily: 'cerapro-bold,sans-serif'}}>Receive Alerts</Header>
                  <p>Travelblogger simple website adventure pretty traveling colorful, website cute whimsical expedition.</p>
                </Grid.Column>
                <Grid.Column style={{backgroundColor: '#dfdedf', height: '400px', marginLeft: '50px', marginTop: '15px', overflow: 'auto'}}>
                  <Image centered src="https://cdn2.iconfinder.com/data/icons/travel-set-2/512/34-512.png" style={{height: '40px', marginTop:'10px'}}/>
                  <Header textAlign="center" style={{fontFamily: 'cerapro-bold,sans-serif'}}>Follow Easy Instructions</Header>
                  <p>Blogger cute clean website organized pretty website. Blogger adventure WordPress website cute blogger traveling clean design.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
        <Container fluid style={{backgroundImage: 'linear-gradient(to bottom right, #0692cd, #00cffc)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', fontFamily: 'cerapro-bold,sans-serif'}}>
          <div style={{height: '600px', width: '100%'}}>
            <br/><br/>
            <Header as="h1" textAlign="center" style={{color: 'white', fontFamily: 'cerapro-bold,sans-serif'}}>Hear from our fans</Header>
            <Carousel speed={1000} dragging={true} slidesToShow={1} edgeEasing="easeOutCirc">
              <Card style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Image centered src="https://pbs.twimg.com/profile_images/949161084602273792/k2ZCRTfb_400x400.jpg"/>
                <p textAlign="center">Amazing!</p>
              </Card>
              <Card style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Image centered src="https://pbs.twimg.com/profile_images/764497897450680321/Q-Q7SgTC_400x400.jpg" />
                <p>Best Prices Ever!</p>
              </Card>
              <Card style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Image centered src="https://cdn.onlyinyourstate.com/wp-content/uploads/2016/07/3630750300_f1cd14cdc3_b-700x875.jpg" />
                <p>Super Easy, Barely An Inconvenience</p>
              </Card>
              <Card style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Image centered src="https://qph.fs.quoracdn.net/main-qimg-0edd1a2156194a28f996b6add2d2ff84" />
                <p>Just Like Magic</p>
              </Card>
            </Carousel>
          </div>
        </Container>
        <Container fluid style={{backgroundImage: 'url(http://resortsunlimited.com/wp-content/uploads/2013/08/home-slider-temp.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', fontFamily: 'cerapro-bold,sans-serif'}}>
          <div style={{height: '800px', width: '100%'}}>
            <br/><br/>
            <Header as="h1" textAlign="center" style={{color: 'white', fontFamily: 'cerapro-bold,sans-serif'}}>Sign Up Now</Header>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;

//https://biohernia.com/wp-content/uploads/2017/10/number-two-in-a-circle-1.png
//"cerapro-bold",sans-serif;
