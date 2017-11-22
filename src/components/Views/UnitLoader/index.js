import React from 'react'
import { 
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon,
  Card, 
  Text,
  CardItem,
  Spinner
} from 'native-base'

import { 
  Col, 
  Row, 
  Grid 
} from "react-native-easy-grid"

import 'whatwg-fetch'
import Config from '../../../config/'

class UnitInfoView extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      isLoading: true
    }
  }
  componentDidMount(){
    const unitCode = this.props.navigation.state.params.unitCode
    fetch(Config.DEFAULT_API_URI + "/units/" + unitCode)
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        this.setState({
          data,
          isLoading: false
        })
      })
  }
  render(){
    const { navigate } = this.props.navigation;
    const { unitCode, unitName, description, faculty, enjoyScore } = this.state.data
    return (
      <View style={styles.container}>
        <ScrollView>
          <Container style={{maxWidth: '80%'}}>
            {
              !this.state.isLoading ?
              <Card>

                <CardItem header>
                    <Text>{unitCode + " - " + unitName}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Grid>
                      <Row>
                        <Col>
                          <Icon ios="ios-school" android="md-school" />
                        </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Icon ios="ios-heart" android="md-heart" />
                          </Col>
                          <Col>
                          <Text>{enjoyScore}</Text>
                        </Col>
                      </Row>
                    </Grid>
                  </Body>
                          <Text>{enjoyScore}</Text>
                </CardItem>
              </Card> :
              <Container>
                <Spinner color="red" />
                <Text>Fetching info about {this.props.navigation.state.params.unitCode}</Text>
              </Container>
            }
          </Container>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UnitInfoView