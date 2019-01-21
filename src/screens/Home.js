import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import {get,getdata,del} from '../actions/test';

class Home extends Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <Text>ADD</Text>
        </TouchableOpacity>
      ),
    }
  };

  componentDidMount(){
    this.props.dispatch(get())
  }
      
  toDetail(item) {
    this.props.dispatch(getdata(item))
    this.props.navigation.navigate('Test',{id:item.id,name:item.name,umur:item.umur})
  }
      
  confirmDelete = (test) => {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this Contact?",
      [
        { text: 'YES', onPress: () => this.props.dispatch(del(test)) },
        { text: 'NO' }
      ]
    );
  }

  render(){
    if(this.props.test.isLoading){
      return(
        <Text>Loading...</Text>
      )
    }
    return(
      <View>
        <View>
          <FlatList
            data={this.props.test.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this.toDetail(item)}}
            onLongPress={() => this.confirmDelete(item.id)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            }          
          />
        </View>
      </View>
    )
  }
}
    
const mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(Home);