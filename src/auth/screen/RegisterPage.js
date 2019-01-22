import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import TextInput from '../components/TextInput';

class Register extends Component{
  
  addTest = (value) => {
    alert(JSON.stringify(value))
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
        name='password'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Password' />
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.handleSubmit(this.addTest)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
export default reduxForm({
    form: 'register'
  })(connect()(Register));

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
      borderRadius:30,
    },
})