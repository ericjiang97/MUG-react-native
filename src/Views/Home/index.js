import React from 'react'
import { 
  Button,
  StyleSheet,
  View 
} from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Left, 
  Right, 
  Body, 
  Icon,
  Text
} from 'native-base';

class HomeView extends React.Component{
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Container style={{padding: 10}}>
          <Content>
            <Text>
              This application is a tool rebuilt in React-Native aimed at making a deeper indepth
              experience using various newer packages then what I did earlier this year, this project
              aims at making the github.com/units-at-monash repo great again.
            </Text>
            <Button onPress={()=>{navigate('Disclaimer')}} title="Disclaimer"/>
            <Button onPress={()=>{navigate('Unit', {unitCode: "FIT1045"})}} title="FIT1045"/>
            <Button onPress={()=>{navigate('BrowseUnits')}} title="Browse for a Unit"/>
          </Content>
        </Container>
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

export default HomeView