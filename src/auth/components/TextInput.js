import React, {Component} from 'react';
import {View, TextInput as Input, StyleSheet, Image} from 'react-native';

class TextInput extends Component {
    render(){
        return(
            <View style={styles.iContainer}>
                <Input
                    style={styles.inputs}
                    placeholder={this.props.placeholder}
                    placeholderTextColor= '#b5b8bc'
                    onChangeText={this.props.input.onChange}
                    value={this.props.input.value} />
            </View>
        )
    }
}

export default TextInput;

const styles = StyleSheet.create({
    iContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        width:300,
        height:35,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'flex-end',
    },
    inputs:{
        height:35,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color: 'white',
    },
    inputIcon:{
      width:20,
      height:20,
      marginLeft:15,
      justifyContent: 'center'
    }
  });