import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  Container,
  Spinner,
  Text,
  Header,
  Item,
  Icon,
  Input,
  Button,
  Content,
  List,
  ListItem
} from 'native-base'
import 'whatwg-fetch'
import Config from '../../config/'
import FuzzySearch from '../../utils/fuzzy.js'
class UnitBrowserPage extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: [],
      error: false,
      searchResults: [],
      searchText: ''
    }
  }

  componentDidMount(){
    fetch(Config.DEFAULT_API_URI + "/basic/units")
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        this.setState({
          data,
          isLoading: false,
          error: false
        })
      })
  }

  search(){
    const { searchText, data } = this.state
    const results = FuzzySearch.search(searchText,data,10,['unitCode', 'unitName'],0.4)
    this.setState({
      searchResults: results
    })
  }

  updateSearchText(searchText){
    this.setState({
      searchText
    })
  }
  render(){
    const { isLoading, data, error, searchResults } = this.state
    return (
      <View>
        <ScrollView>
          {
            isLoading ?
            <Container style={styles.container}>
              <Spinner color="blue" />
              <Text>Fetching all units from monPlan API</Text>
            </Container> :
            <View>
              <Header searchBar rounded>
                <Item>
                  <Icon name="ios-search" />
                  <Input 
                    placeholder="Search" 
                    onChangeText={
                      (searchText) => {
                        this.updateSearchText(searchText)
                      }} />
                </Item>
                <Button transparent onPress={this.search()}>
                  <Text>Search</Text>
                </Button>
              </Header>
              <Content>
                <List>
                  {
                    searchResults.map((unit, key) =>{
                      const { unitCode, unitName} = unit
                      return <ListItem>
                                <Text>{unitCode} - {unitName}</Text>
                              </ListItem>
                    })
                  }
                </List>
              </Content>
            </View>
          }
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

export default UnitBrowserPage