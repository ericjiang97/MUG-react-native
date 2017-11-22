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
        <Container  style={{padding: 10}}>
          <Content>
            <Text>
            The Handbook is the official statement of courses and units available for study at Monash University, published each academic year. Changes made after publication which might affect student enrolment or progression are recorded in the official change register. The Handbook sets out the requirements that must be satisfied for a student to be eligible for course completion and graduation (refer also to How to use the Handbook).
            </Text>
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