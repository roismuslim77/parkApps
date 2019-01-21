import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import TextInput from '../components/TextInput';

class Add extends Component {
    
  addTest = (value) => {
    if ((value.email==='admin')&&(value.password==='admin123')){
        this.props.navigation.navigate('HomeRoot')
    }else{
        alert('email/password salah')
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
        <Image style={{height: 30, width: 130, marginBottom: '12%'}} 
          source={{uri: 'https://fontmeme.com/permalink/190109/e013f808a451c866d11547d441ff8aa1.png'}}/>
        </View>
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
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default reduxForm({
  form: 'login'
})(connect()(Add));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    },
    buttonContainer: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
})