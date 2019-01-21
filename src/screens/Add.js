import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import TextInput from './TextInput';
import {add} from '../actions/test';

class Add extends Component {
    
  addTest = (value) => {
    alert(JSON.stringify(value))
    const name = value.name
    const umur = value.umur
    const data = {
      id: uuidv1(),
      name: name,
      umur: umur
    }
    this.props.dispatch(add(data));
    this.props.dispatch({type: 'Navigation/POP'})
  }

  render(){
    return(
      <View>
        <Field 
          name='name'
          component={TextInput}
          placeholder='Name' />
        <Field 
          name='umur'
          component={TextInput}
          placeholder='Umur' />
        <TouchableOpacity onPress={this.props.handleSubmit(this.addTest)}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    test: state.test
  }
}

export default reduxForm({
  form: 'test'
})(connect(mapStateToProps)(Add));