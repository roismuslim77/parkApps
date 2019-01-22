import React, {Component} from 'react';
import {View, TextInput as Input, StyleSheet, Image} from 'react-native';

class TextInput extends Component {
    render(){
        return(
            <View style={styles.iContainer}>
            <Image style={styles.inputIcon} 
                source={{uri: this.props.icon}}/>
                <Input
                    style={styles.inputs}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.input.onChange}
                    value={this.props.input.value} />
            </View>
        )
    }
}

export default TextInput;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    iContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:35,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:35,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:20,
      height:20,
      marginLeft:15,
      justifyContent: 'center'
    }
  });