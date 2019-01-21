import React, {Component} from 'react';
import {View, TextInput as Input} from 'react-native';

class TextInput extends Component {
    render(){
        return(
            <View>
                <Input
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.input.onChange}
                    value={this.props.input.value} />
            </View>
        )
    }
}

export default TextInput;