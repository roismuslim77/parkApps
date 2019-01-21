import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInput from './TextInput';
import {Field, reduxForm} from 'redux-form';
import {edit} from '../actions/test';
import {connect} from 'react-redux';

class Test extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name')
      }
    };

  componentDidMount(){
    this.props.initialize({
      name: this.props.navigation.getParam('name'),
      umur: this.props.navigation.getParam('umur')
    })
  }

  saveTest= (value) => {
    const id = this.props.navigation.getParam('id')
    const name = value.name
    const umur = value.umur
    const data = {id:id,name:name,umur:umur}
    this.props.dispatch(edit(data))
    this.props.dispatch({type:'Navigataion/POP'})
  }
      
  render(){
    return(
      <View>
        {/* <Text>{this.props.product.result.name}</Text>
        <Text>{this.props.product.result.umur}</Text> */}
        <Field 
          name='name'
          component={TextInput}
          placeholder='Name' />
        <Field 
          name='umur'
          component={TextInput}
          placeholder='Umur' />
        <TouchableOpacity onPress={this.props.handleSubmit(this.saveTest)}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {
//       product: state.product
//     }
//   }
  
// export default connect(mapStateToProps)(Product);

export default reduxForm({
  form: 'test'
})(connect()(Test));