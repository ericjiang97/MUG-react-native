import React from 'react'
import { 
  StyleSheet,
  View,
  Text
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
} from 'native-base';

class HomeView extends React.Component{
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <Text>{JSON.stringify(this.props.navigation)}</Text>
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