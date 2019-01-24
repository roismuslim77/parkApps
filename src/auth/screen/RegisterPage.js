import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import TextInput from '../components/TextInput';

import {postuser} from '../../public/redux/actions/auth';
import {get} from '../../public/redux/actions/test';

class Register extends Component{
  
  addUser = (value) => {
    this.props.dispatch(postuser(value))
    //alert(JSON.stringify(this.props.auth))
  }
  
  render(){
    return(
      <View>   
      <Field 
        name='email'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Email' />
      <Field 
        name='username'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Username' />
      <Field 
        name='password'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Password' />
      <Field 
        name='repassword'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Re-Password' />
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.handleSubmit(this.addUser)}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

mapStateToProps=(state)=>{
  return state
}

export default reduxForm({
    form: 'register'
  })(connect(mapStateToProps)(Register));

  const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonContainer: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
    },
})